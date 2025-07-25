import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

import appointmentRoutes from './routes/appointmentRoutes.js'

dotenv.config();
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json()); // to parse JSON bodies

// Routes
app.use('/api/appointments', appointmentRoutes);

//Serve static frontend files from 'dist'(after react build)
app.use(express.static(path.join(__dirname, 'dist')));

//Redirect all unmatched routes to index.html (for react Router)
app.all('/{*any}', (req, res)=>{
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

//connect mongoDB

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB Connected');
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
})
.catch((error) => console.error('MongoDB connection failed:', error));