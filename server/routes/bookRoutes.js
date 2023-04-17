import express from "express";
const router = express.Router();
import { Book } from "../model/bookModel.js";
import {
  addBook,
  deleteBook,
  getAllBooks,
  getByID,
  updateBook,
} from "../controllers/bookController.js";

// get all books
router.get("/", getAllBooks);
// add a book
router.post("/", addBook);
// get a book
router.get("/:id", getByID);
//update a book
router.put("/:id", updateBook);
//delete a book
router.delete("/:id", deleteBook);
export { router };
