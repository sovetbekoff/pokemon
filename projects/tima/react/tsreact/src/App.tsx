import React, { useState } from "react";
import Navbar from "./componnets/Header/Navbar";
import TodoPanel from "./componnets/TodoPanel/TodoPanel";
import "./App.css";
import { type } from "os";

const DEFAULT_TODO_LIST = [
  { id: 1, name: "task1", description: "descr1", checked: false },
  { id: 2, name: "task2", description: "descr2", checked: true },
];
const App = () => {
  const [todos, setTodos] = useState(DEFAULT_TODO_LIST);
  console.log(todos, setTodos);

  type Todo = {
    id: number;
    name: string;
    description: string;
    checked: boolean;
  };
  const addTodo = ({ name, description }: Omit<Todo, "checked" | "id">) => {
    setTodos([
      ...todos,
      { id: todos[todos.length - 1].id + 1, description, name, checked: false },
    ]);
  };
  return (
    <div className="apply_container">
      <div className="container">
        <Navbar todoCount={todos.length} />
        <TodoPanel addTodo={addTodo} />
      </div>
    </div>
  );
};

export default App;
