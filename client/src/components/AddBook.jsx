import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const AddBook = () => {
  const init = {
    name: "",
    author: "",
    description: "",
    price: 0,
    image: "",
  };
  const [inputs, setinputs] = useState(init);
  const [checked, setchecked] = useState(true);
  function handleChange(e) {
    setinputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
  async function postBook() {
    return await axios.post("https://bookstore-server-ten.vercel.app/books", {
      ...inputs,
      available: checked,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    postBook().then(() => {
      setinputs(init);
      navigate("/books");
    });
    console.log(inputs);
  }
  const navigate = useNavigate();
  return (
    <div className="py-8 px-12">
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
            Add Book
          </button>
        </p>
      </form>
    </div>
  );
};
