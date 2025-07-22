import express from 'express';
import { getBook, createBook } from '../controller/book.controller.js';

const router = express.Router();

router.get("/", getBook);
router.post("/", createBook); // Add this new route

export default router;