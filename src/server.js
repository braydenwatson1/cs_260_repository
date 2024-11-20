import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';
import userRoutes from './models/User.js';
import jwt from 'jsonwebtoken'; // Needed for test-login
import { getUsersCollection } from './models/Database.js'; // Adjust path if necessary

dotenv.config();
console.log('MongoDB URI:', process.env.MONGODB_URI);  // Logs the URI to make sure it's correct

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api/users', userRoutes);  // Use the routes for user operations

// Database setup
const client = new MongoClient(process.env.MONGODB_URI);
let db;

async function connectToDatabase() {
  try {
    await client.connect();
    db = client.db('your_database_name');  // Replace with your DB name
    console.log('Connected to database');
  } catch (error) {
    console.error('Database connection error:', error);
  }
}

// ** Test Routes **
app.post('/api/test-register', async (req, res) => {
  console.log("Reached /api/test-register"); // Add this log

  const newUser = {
    email: 'testuser@example.com', 
    password: 'password123', 
    pushups: 0,
    goal: 50
  };

  const usersCollection = await getUsersCollection();
  const existingUser = await usersCollection.findOne({ email: newUser.email });

  if (existingUser) {
    return res.status(400).send('User already exists');
  }

  await usersCollection.insertOne(newUser);
  res.send('Test user registered successfully');
});


app.post('/api/test-login', async (req, res) => {
  const testEmail = 'testuser@example.com';
  const testPassword = 'password123';

  const usersCollection = await getUsersCollection();
  const user = await usersCollection.findOne({ email: testEmail });

  if (user && user.password === testPassword) {
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
});

// Start the server
app.listen(PORT, async () => {
  await connectToDatabase();
  console.log(`Server running on port ${PORT}`);
});

