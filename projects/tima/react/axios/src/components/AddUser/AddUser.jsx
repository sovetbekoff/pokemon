import axios from "axios";
import React, { useState } from "react";

const AddUser = () => {
  const userObj = {
    name: "",
  };
  const [name, setName] = useState(userObj);

  const handleChange = (e) => {
    e.preventDefault();
    setName({
      name: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/users", { name })
      .then((res) => {
        console.log(res.data);
      });
    setName({ name: "" });
  };
  return (
    <div>
      <h2>Add user</h2>
      <div className="l">
        <form onSubmit={submitForm}>
          <label>
            User name:
            <input type="text" name="name" id="" onChange={handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
