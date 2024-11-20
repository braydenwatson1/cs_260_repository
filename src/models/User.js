import express from 'express';
import jwt from 'jsonwebtoken';
import { getUsersCollection } from './Database.js'; 

const router = express.Router();

// Middleware to verify JWT token
function verifyToken(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1]; // Extract token from header
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

  try {
    const usersCollection = await getUsersCollection();
    const existingUser = await usersCollection.findOne({ email });

    if (existingUser) {
      return res.status(400).send('User already exists');
    }

    const newUser = {
      email,
      password,
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

  try {
    const usersCollection = await getUsersCollection();
    const user = await usersCollection.findOne({ email });

    if (user && user.password === password) {
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

// More routes...

export default router;
