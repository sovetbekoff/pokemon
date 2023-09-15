import axios from "axios";
import React, { useState } from "react";

const Delete = () => {
  const [state, setState] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setState({ id: e.target.value });
  };
  const handleInp = (e) => {
    e.preventDefault();
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${state.id}`)
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <div>
      <div>
        Remove User
        <div>
          <form onSubmit={handleInp}>
            <label>
              User ID:
              <input type="number" name="id" onChange={handleChange} />
            </label>
            <button type="submit">Delete</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Delete;
