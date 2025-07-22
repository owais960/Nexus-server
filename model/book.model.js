import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  name: String,
  location: String,
  description: String,
  pricePerHour: Number,
  size: String,
  surfaceType: String,
  amenities: [String], // Correct array of strings syntax
  images: [String],   // Correct array of strings syntax
  contactNumber: String,
  email: String,
  createdAt: { type: Date, default: Date.now } // Added timestamp
});

const Book = mongoose.model("Book", bookSchema);

export default Book;