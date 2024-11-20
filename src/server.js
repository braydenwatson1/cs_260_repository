import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';
import userRoutes from './models/User.js';

dotenv.config();
console.log('MongoDB URI:', process.env.MONGODB_URI);  // Logs the URI to make sure it's correct

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api/users', userRoutes);  // Use the routes for user operations


//testing
app.get('/api/users', (req, res) => {
  res.send('Users endpoint is active!');
});

app.post('/api/test-register', async (req, res) => {
  const newUser = {
    email: 'testuser@example.com', 
    password: 'password123', 
    pushups: 0,
    goal: 50
  };

  const usersCollection = await getUsersCollection(); // From your `Database.js`
  const existingUser = await usersCollection.findOne({ email: newUser.email });

  if (existingUser) {
    return res.status(400).send('User already exists');
  }

  await usersCollection.insertOne(newUser);
  res.send('Test user registered successfully');
});


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

// Start the server
app.listen(PORT, async () => {
  await connectToDatabase();
  console.log(`Server running on port ${PORT}`);
});
