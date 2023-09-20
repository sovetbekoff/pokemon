import React from "react";
import { Link } from "react-router-dom";
import "../css/TodoList.css";
const TodoList = ({ products, deleteProduct, getEditedProduct }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {products.map((item) => (
        <div key={item.id}>
          <div className="m-3 rounded-md border-2 border-black w-1/1">
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
            <p>{item.price}</p>
            <button
              onClick={() => getEditedProduct(item.id)}
              className="border-black border-2 rounded-md m-3 w-1/1 editInp"
            >
              edit
            </button>
            <button
              onClick={() => deleteProduct(item.id)}
              className="border-black border-2 rounded-md m-3 w-1/1 editInp"
            >
              delete
            </button>
          </div>
          {/* <div className="btns">
            <Link
              to={`/edit/${item.id}`}
              className="border-black border-2 rounded-md m-3 w-1/1 editInp"
            >
              Edit
            </Link>
            <button
              onClick={() => deleteProduct(item.id)}
              className="border-black border-2 rounded-md m-3 w-1/1 editInp"
            >
              Delete
            </button>
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
