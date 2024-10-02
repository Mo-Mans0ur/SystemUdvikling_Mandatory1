import express from 'express';
import personRoutes from './routes/personRoutes.js';
import path from 'path';

const app = express(); // Create the Express app
app.use(express.json()); // Middleware to handle JSON
app.use('/api/', personRoutes); // Route to get a random person

// Serve static files from the 'public' folder
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'public')));

// CORS middleware (place this right after initializing the app)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Route to get a random person
app.use('/api/person', personRoutes);

// Basic route to test if the server is running
app.get('/', (req, res) => {
  res.send('Hi all, welcome to the personal test data generator!');
});

export default app;
