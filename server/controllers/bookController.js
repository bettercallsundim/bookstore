import { Book } from "../model/bookModel.js";

const getAllBooks = async (req, res, next) => {
  let books;
  try {
    books = await Book.find({});
  } catch (error) {
    console.log(error);
  }
  if (!books) {
    return res.status(404).json({ msg: "Books not found" });
  }
  return res.status(200).json({ books });
};
const addBook = async (req, res, next) => {
  const { name, author, description, price, available, image } = req.body;
  let book;
  try {
    book = new Book({
      name,
      author,
      description,
      price,
      available,
      image,
    });
    await book.save();
  } catch (error) {
    console.log(error);
  }
  if (!book) {
    return res.status(404).json({ msg: "Failed to add book" });
  }
  return res.status(200).json({ book });
};

const getByID = async (req, res, next) => {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findById(id);
  } catch (error) {
    console.log(error);
  }
  if (!book) {
    return res.status(404).json({ msg: "No book found" });
  }
  return res.status(200).json({ book });
};

const updateBook = async (req, res, next) => {
  const id = req.params.id;
  const { name, author, description, price, available, image } = req.body;
  let book;
  try {
    book = await Book.findByIdAndUpdate(id, {
      name,
      author,
      description,
      price,
      available,
      image,
    });
    book = await book.save();
  } catch (error) {
    console.log(error);
  }
  if (!book) {
    return res.status(404).json({ msg: "Book update failed" });
  }
  return res.status(200).json({ book });
};

const deleteBook = async (req, res, next) => {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findByIdAndRemove(id);
  } catch (error) {
    console.log(error);
  }
  if (!book) {
    return res.status(404).json({ msg: "Book delete failed" });
  }
  return res.status(200).json({ msg: "Book deleted successfully", book });
};

export { getAllBooks, addBook, getByID, updateBook, deleteBook };
