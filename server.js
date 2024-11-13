const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const playerRouter = require('./controllers/players');
const teamRouter = require('./controllers/teams');

// Middleware
app.use(cors({ origin: '*' }));
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB: ${mongoose.connection.name}`);
});

// Routes
app.use('/players', playerRouter);
app.use('/teams', teamRouter)

// Start server
app.listen(3000, () => {
  console.log('The express app is ready on port 3000!');
});
