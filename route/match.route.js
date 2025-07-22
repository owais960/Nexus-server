import express from 'express';
import { getMatch, createTournament } from '../controller/match.controller.js';
import multer from 'multer';
import path from 'path';

const router = express.Router();

// Configure storage for uploaded files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/') // Directory where files will be stored
  },
  filename: function (req, file, cb) {
    // Create unique filename with timestamp and original extension
    cb(null, Date.now() + path.extname(file.originalname))
  }
});

// File filter to only accept images
const fileFilter = (req, file, cb) => {
  const filetypes = /jpeg|jpg|png|gif/;
  const mimetype = filetypes.test(file.mimetype);
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  
  if (mimetype && extname) {
    return cb(null, true);
  }
  cb(new Error('Error: Only image files (JPEG, JPG, PNG, GIF) are allowed!'));
};

// Initialize multer with configuration
const upload = multer({ 
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit
});

router.get("/", getMatch);
router.post("/", upload.single('image'), createTournament); // Add multer middleware

export default router;