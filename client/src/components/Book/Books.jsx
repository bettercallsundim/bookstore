import React, { useEffect, useState } from "react";
const URL = "https://bookstore-server-ten.vercel.app/books";
import axios from "axios";
import { Book } from "./Book";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => {
    return res.data;
  });
};

export const Books = () => {
  const [books, setbooks] = useState([]);
  useEffect(() => {
    fetchHandler().then((data) => setbooks(data.books));
  }, []);
  console.log(books);

  return (
    <div>
      <ul className="flex gap-8 flex-wrap pl-12 pt-8">
        {books &&
          books.map((book, ind) => {
            return (
              <div key={ind} className="">
                <Book book={book} />
              </div>
            );
          })}
      </ul>
    </div>
  );
};
