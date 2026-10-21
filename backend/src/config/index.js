import dotenv from 'dotenv';
import app from '../app.js';
import connectDB from './database.js';

dotenv.config({ path: './.env' });

const startServer = async () => {
  try {
    await connectDB();

    const port = process.env.PORT || 5000;
    const server = app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });

    server.on('error', (error) => {
      console.error('Server failed to start:', error);
      process.exitCode = 1;
    });
  } catch (error) {
    console.error('Application startup failed:', error);
    process.exitCode = 1;
  }
};

startServer();
