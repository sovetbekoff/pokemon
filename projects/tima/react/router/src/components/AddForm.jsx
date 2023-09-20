import Input2 from "../ui/Input";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddForm = ({ addProduct }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  // console.log(title, price, image);

  function createProduct() {
    if (!title || !price || !image) {
      return;
    }
    let newProduct = {
      title,
      price,
      image,
    };

    addProduct(newProduct);

    navigate("/");

    setImage("");
    setTitle("");
    setPrice("");
  }

  return (
    <div className="w-1/2 m-auto">
      <Input2
        val={title}
        label={"Title"}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input2
        val={price}
        label={"Price"}
        onChange={(e) => setPrice(e.target.value)}
      />
      <Input2
        val={image}
        label={"Image"}
        onChange={(e) => setImage(e.target.value)}
      />
      <button
        className="bg-green-400 py-0 px-2 rounded-md text-white"
        onClick={createProduct}
      >
        Save
      </button>
    </div>
  );
};

export default AddForm;
