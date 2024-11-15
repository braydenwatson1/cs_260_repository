import express from 'express';
import cors from 'cors';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';  // Import dotenv at the top

dotenv.config();  // Load environment variables from the .env file

const app = express();
const PORT = process.env.PORT || 5000;  // Use the PORT variable from .env, fallback to 5000 if not set

// MongoDB URI from the .env file
const mongoURI = process.env.MONGODB_URI;

// Create MongoDB client
const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
let db;
client.connect()
  .then(() => {
    db = client.db('pushupTracker'); // Use your correct database name here
    console.log('Connected to MongoDB!');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

// POST /register endpoint
app.post('/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    const usersCollection = db.collection('users'); // Reference to 'users' collection inside 'pushupTracker' database

    // Check if the email already exists
    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      return res.status(400).send('User already exists');
    }

    // Insert a new user
    await usersCollection.insertOne({ email, password });
    res.send('User registered successfully');
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).send('Server error');
  }
});

// POST /login endpoint
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const usersCollection = db.collection('users'); // Reference to 'users' collection inside 'pushupTracker' database

    // Find the user by email
    const user = await usersCollection.findOne({ email });

    if (user && user.password === password) {
      res.send('Login successful');
    } else {
      res.status(401).send('Invalid email or password');
    }
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).send('Server error');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
