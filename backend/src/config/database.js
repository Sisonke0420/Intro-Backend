import mongoose from 'mongoose';
import { DB_NAME } from './constants.js';

const connectDB = async () => {
  const mongoUri = process.env.MONGO_URI;
  if (!mongoUri) {
    throw new Error('MONGO_URI environment variable is required');
  }

  const connection = await mongoose.connect(mongoUri, { dbName: DB_NAME });
  console.log(`MongoDB connected: ${connection.connection.host}`);
};

export default connectDB;
