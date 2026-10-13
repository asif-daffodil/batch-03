const mongoose = require('mongoose');

const connectDB = async () => {
  const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/bookshelf';
  try {
    const conn = await mongoose.connect(mongoUri);
    console.log(`[Database] MongoDB connected successfully to ${conn.connection.host}:${conn.connection.port || 'default'}/${conn.connection.name}`);
    return conn;
  } catch (error) {
    console.error(`[Database Error] Failed to connect to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;

