import express from 'express';
import cors from 'cors';

// Initialize Express app
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Enable CORS to allow frontend (running on a different port) to make requests
app.use(cors({
  origin: 'http://localhost:3000' // Replace with your frontend URL
}));

// Sample route to send data to the frontend
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Start the server on port 5000
app.listen(5000, () => {
  console.log('Backend server is running on http://localhost:5000');
});
