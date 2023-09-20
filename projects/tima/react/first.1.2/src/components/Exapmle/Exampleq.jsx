import React, { useEffect, useState } from "react";

const Example1 = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, []);

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("items"));
    console.log(products);
  }, []);
  return <div></div>;
};

export default Example1;
