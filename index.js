import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import matchRoute from "./route/match.route.js";
import teamRoute from './route/team.route.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}

// Serve static files from upload folder
app.use('/uploads', express.static('uploads'));
app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use("/match", matchRoute);
app.use('/team', teamRoute);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});