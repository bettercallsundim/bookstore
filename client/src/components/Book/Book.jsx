import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Book = (props) => {
  const { _id, name, description, author, price, available, image } =
    props.book;
  async function handleDelete() {
    return await axios.delete(
      `https://bookstore-server-ten.vercel.app/books/${_id}`
    );
  }
  const navigate = useNavigate();
  function handleUpdate() {
    navigate(`/books/${_id}`);
  }
  return (
    <div>
      <p>
        <img src={image} alt="" />
      </p>
      <p>{name}</p>
      <p>{description}</p>
      <p>{price}</p>
      <p>{author}</p>
      <p>
        <button
          onClick={handleUpdate}
          className="bg-sky-500 text-white rounded px-2 mr-8 my-4"
        >
          Update
        </button>
        <button
          onClick={handleDelete}
          className="bg-sky-500 text-white rounded px-2 my-4"
        >
          Delete
        </button>
      </p>
    </div>
  );
};
