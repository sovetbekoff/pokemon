import React from "react";

const TodoList = ({ todos, deleteTask, getEditedObj }) => {
  console.log(todos);
  let style = {
    color: "red",
    listStyleType: "none",
  };

  let getStyle = {
    color: "white",
    backgroundColor: "red",
    border: "none",
    borderRadius: "20px",
    marginLeft: "12px",
  };
  return (
    <div>
      <h2>TODO List Component</h2>
      <ul style={style}>
        {todos.map((item) => (
          <li
            key={item.id}
            style={{
              border: "1px solid orange",
              borderRadius: "15px",
              margin: "10px",
              padding: "70px",
            }}
          >
            {item.task}
            <button onClick={() => deleteTask(item.id)} style={getStyle}>
              Delete
            </button>
            <button onClick={() => getEditedObj(item.id)} style={getStyle}>
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
