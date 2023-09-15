import axios from "axios";
import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUSers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      //   console.log(res);
      //   setUSers(res?.data);
    });
  }, []);
  return (
    <div>
      <h2>List of users</h2>
      {users.map((item, index) => {
        return (
          <div key={index}>
            <p>{item?.id}</p>
            <p>{item?.username}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
