const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connects to the database
connectDB();

// Validates the application PORT
const PORT = process.env.PORT || 4000;

// Allows ExpressJS to use json
app.use(express.json({ extends: true }));

// API routes for creating and authenticating users
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));

// Checks the current application port
app.listen(PORT, () => {
  // console.log(`App is running on PORT ${PORT}`);
});
