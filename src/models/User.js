import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'; // For password hashing
import { getUsersCollection } from './Database.js';

const router = express.Router();

// Middleware to verify JWT token
function verifyToken(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1]; // Extract token from "Bearer <token>"
  if (!token) {
    return res.status(401).send('Unauthorized');
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
    req.userId = decoded.userId; // Attach userId to request
    next();
  } catch (error) {
    console.error('Invalid token:', error);
    res.status(403).send('Forbidden');
  }
}

// Register new user
router.post('/register', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send('Email and password are required');
  }

  try {
    const usersCollection = await getUsersCollection();
    const existingUser = await usersCollection.findOne({ email });

    if (existingUser) {
      return res.status(400).send('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
    const newUser = {
      email,
      password: hashedPassword, // Store hashed password
      pushups: 0, // Default pushups
      goal: 50,   // Default goal
    };

    await usersCollection.insertOne(newUser);
    res.send('User registered successfully');
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).send('Server error');
  }
});

// Login user
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send('Email and password are required');
  }

  try {
    const usersCollection = await getUsersCollection();
    const user = await usersCollection.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) { // Compare hashed password
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

      res.json({
        message: 'Login successful',
        token,
        user: {
          email: user.email,
          pushups: user.pushups,
          goal: user.goal,
        },
      });
    } else {
      res.status(401).send('Invalid email or password');
    }
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).send('Server error');
  }
});

export default router;
