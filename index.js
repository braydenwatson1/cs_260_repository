import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

const users = [
  { email: 'user@example.com', password: 'password123' }
];

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email);

  if (user && user.password === password) {
    return res.send('Login successful');
  } else {
    return res.status(401).send('Invalid email or password');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});