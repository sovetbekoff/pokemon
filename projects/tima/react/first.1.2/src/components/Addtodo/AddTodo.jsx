import React, { useState } from "react";

const AddTodo = (props) => {
  const [task, setTask] = useState("");

  const handleInput = (e) => {
    setTask(e.target.value);
  };
  // console.log(props.handleTask);
  function handleAdd() {
    if (!task.trim()) {
      alert("inp is empty");
    }

    const newTask = {
      task: task,
      status: false,
      id: Date.now(),
    };
    // console.log(newTask);
    setTask("");
    props.handleTask(newTask);
  }

  return (
    <div>
      <h2>ADD TODO Component</h2>
      <input type="text" id="" onChange={handleInput} value={task} />
      {/* <input type="text" id="" onChange={handleInput} value={task} /> */}
      <button onClick={handleAdd}>ADD</button>
      <p>{task} </p>
    </div>
  );
};

export default AddTodo;
