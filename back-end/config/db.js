const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });

// Configuration for connecting to the database with dotenv
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
  } catch (error) {
    process.exit(1);
  }
};

module.exports = connectDB;
