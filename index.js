import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

// For handling `__dirname` with ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the Vite 'dist' folder
app.use(express.static(path.join(__dirname, 'dist')));

// Catch-all route to serve the index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});