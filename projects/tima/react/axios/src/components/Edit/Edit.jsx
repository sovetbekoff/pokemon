import axios from "axios";
import React, { useState } from "react";

const Edit = () => {
  const [editedUser, setEditedUser] = useState({
    name: "",
    userName: "",
  });

  const hnadleChange = (e) => {
    e.preventDefault();
    setEditedUser({
      ...editedUser,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .put("https://jsonplaceholder.typicode.com/users/1", { editedUser })
      .then((res) => console.log(res.data));
  };
  return (
    <>
      <div>
        <form>
          <label onSubmit={submitForm}>
            user name:
            <input
              type="text"
              name="name"
              id=""
              placeholder="name"
              value={editedUser.name}
              onChange={hnadleChange}
            />
            <input
              type="text"
              name="userName"
              id=""
              placeholder="userName"
              value={editedUser.userName}
              onChange={hnadleChange}
            />
          </label>
          <button type="submit">add</button>
        </form>
      </div>
    </>
  );
};

export default Edit;
