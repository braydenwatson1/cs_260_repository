import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = "mongodb+srv://bwatsonbyu:byubrayden100@cluster0.fg9hf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let db;

async function connectToDatabase() {
  if (!db) {
    try {
      await client.connect();
      db = client.db('your_database_name');  // Replace with your actual DB name
      console.log('Connected to database');
    } catch (error) {
      console.error('Database connection error:', error);
      throw error;
    }
  }
}

export async function getUsersCollection() {
  await connectToDatabase();
  return db.collection('users');
}

