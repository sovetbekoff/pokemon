import Input2 from "../ui/Input";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditForm = ({ editedProduct, saveEditedProduct, getProducts }) => {
  const [editTitle, setEditTitle] = useState(editedProduct.title);
  const [editPrice, setEditPrice] = useState(editedProduct.price);
  const [editImage, setEditImage] = useState(editedProduct.image);
  console.log(editedProduct);
  const navigate = useNavigate();
  let { id } = useParams();
  // console.log(title, price, image);

  function handleSave() {
    if (!editTitle || !editPrice || !editImage) {
      return;
    }
    console.log(saveEditedProduct);
    let newProduct = {
      title: editTitle,
      price: editPrice,
      image: editImage,
    };

    saveEditedProduct(newProduct, id);

    navigate("/");

    setEditImage("");
    setEditTitle("");
    setEditPrice("");
    getProducts();
  }

  return (
    <div className="w-1/2 m-auto">
      <Input2
        val={editTitle}
        label={"Title"}
        onChange={(e) => setEditTitle(e.target.value)}
      />
      <Input2
        val={editPrice}
        label={"Price"}
        onChange={(e) => setEditPrice(e.target.value)}
      />
      <Input2
        val={editImage}
        label={"Image"}
        onChange={(e) => setEditImage(e.target.value)}
      />
      <button
        className="bg-green-400 py-0 px-2 rounded-md text-white"
        onClick={(e) => handleSave(e)}
      >
        Save Changes
      </button>
    </div>
  );
};

export default EditForm;
