import Book from "../model/book.model.js";

// Existing GET function
export const getBook = async(req, res) => {
    try {
        const book = await Book.find().sort({ createdAt: -1 }); // Sort by newest first
        res.status(200).json(book);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};

// Add this new POST function
export const createBook = async (req, res) => {
    try {
        const bookData = req.body;
        const newBook = new Book(bookData);
        const savedBook = await newBook.save();
        res.status(201).json(savedBook);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ message: error.message });
    }
};