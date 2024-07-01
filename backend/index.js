import express, { json } from 'express';
 import cors from 'cors';
 import { config } from 'dotenv';
 import userRoutes from './routes/userRoutes.js';

// Load environment variables from a configuration file
config({ path: "./config/config.env" });

// Handling Uncaught Exception
process.on('uncaughtException', function (err) {
    console.log(`Error: ${err.message}`);
    console.log("Shutting Down the Server due to Uncaught Exception");
    server.close(() => {
        process.exit(1); c///....cgfnfg
    });
});

// Handling Unhandled Promise Rejection
process.on('unhandledRejection', function (err) {
    console.log(`Error: ${err.message}`);
    console.log("Shutting Down the Server due to Unhandled Promise Rejection");
    server.close(() => {
        process.exit(1);
    });
});

// Create an Express application
const app = express();

// Middleware setup
 app.use(json());
 app.use(cors());
 app.use('/api/v1', userRoutes);

// Start the server
const server = app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
