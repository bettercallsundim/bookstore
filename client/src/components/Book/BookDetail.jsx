import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const BookDetail = () => {
  const init = {
    name: "",
    author: "",
    description: "",
    price: 0,
    image: "",
  };
  const { id } = useParams();
  // const [book, setbook] = useState(init);
  async function fetchDetails() {
    return await axios.get(
      `https://bookstore-server-ten.vercel.app/books/${id}`
    );
  }
  const [inputs, setinputs] = useState(init);
  useEffect(() => {
    fetchDetails().then((res) => {
      // setbook(res.data.book);
      setinputs(res.data.book);
    });
  }, []);

  const [checked, setchecked] = useState(true);
  function handleChange(e) {
    setinputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
  async function updateBook() {
    return await axios.put(
      `https://bookstore-server-ten.vercel.app/books/${id}`,
      {
        ...inputs,
        available: checked,
      }
    );
  }
  function handleSubmit(e) {
    e.preventDefault();
    updateBook().then(() => {
      setinputs(init);
      navigate("/books");
    });
    console.log(inputs);
  }
  const navigate = useNavigate();
  return (
    <div className="py-8 px-12">
      <p className="mb-8">
        <img src={book.image} alt="" />
      </p>
      <form onSubmit={handleSubmit}>
        <p>
          {" "}
          Name :{" "}
          <input
            onChange={handleChange}
            value={inputs.name}
            name="name"
            className="border"
            type="text"
          />
        </p>
        <p>
          {" "}
          Author :{" "}
          <input
            onChange={handleChange}
            value={inputs.author}
            name="author"
            className="border"
            type="text"
          />
        </p>
        <p>
          {" "}
          Description :{" "}
          <input
            onChange={handleChange}
            value={inputs.description}
            name="description"
            className="border"
            type="text"
          />
        </p>
        <p>
          {" "}
          Price :{" "}
          <input
            onChange={handleChange}
            value={inputs.price}
            name="price"
            className="border"
            type="number"
          />
        </p>
        <p>
          {" "}
          Image :{" "}
          <input
            onChange={handleChange}
            value={inputs.image}
            name="image"
            className="border"
            type="text"
          />
        </p>
        <p>
          <input
            onChange={() => setchecked(!checked)}
            checked={checked}
            name="available"
            // for="available"
            type="checkbox"
          />
          <label htmlFor="available"> Available</label>
        </p>
        <p>
          <button
            className="bg-sky-500 text-white rounded px-4 my-4"
            type="submit"
          >
            Update Book
          </button>
        </p>
      </form>
    </div>
  );
};
