import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import AddForm from "../components/AddForm";
import TodoList from "../components/TodoList";
import EditForm from "../components/EditForm";
import axios from "axios";

const MainRoutes = () => {
  const [products, setProducts] = useState([]);
  const [editedProduct, setEditedProduct] = useState(null);
  const API = "http://localhost:8001/products";
  //   console.log(products);
  const navigate = useNavigate();
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get(API);
    setProducts(response.data);
  };

  const addProduct = async (newProduct) => {
    try {
      await axios.post(API, newProduct);
      getProducts();
    } catch (error) {
      console.error("Ошибка при добавлении продукта: ", error);
    }
  };

  function deleteProduct(id) {
    axios.delete(`${API}/${id}`);
    getProducts();
  }

  async function getEditedProduct(id) {
    const { data } = await axios.get(`${API}/${id}`);
    setEditedProduct(data);
    navigate("/edit");
  }

  async function saveEditedProduct(newEditProduct) {
    await axios.patch(`${API}/${editedProduct.id}`, newEditProduct);
    navigate("/");
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <TodoList
            products={products}
            deleteProduct={deleteProduct}
            getEditedProduct={getEditedProduct}
          />
        }
      />
      <Route path="/add" element={<AddForm addProduct={addProduct} />} />
      <Route
        path="/edit"
        element={
          <EditForm
            editedProduct={editedProduct}
            saveEditedProduct={saveEditedProduct}
            getProducts={getProducts}
          />
        }
      />
    </Routes>
  );
};

export default MainRoutes;
