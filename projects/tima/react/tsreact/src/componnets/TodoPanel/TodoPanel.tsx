import React, { useState } from "react";
import "./TodoPanel.css";
import Button from "../Button/Button";

const DEFAULT_TODO = {
  name: "",
  description: "",
};

interface TodoPanelProps {
  addTodo: ({ name, description }: Omit<Todo, "checked " | "id">) => void;
}
const TodoPanel: React.FC<TodoPanelProps> = ({ addTodo }) => {
  const [todo, setTodo] = useState(DEFAULT_TODO);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };
  return (
    <div className="todo_panel_container">
      <div className="fields_container">
        <div className="field_container">
          <label htmlFor="name">
            <div>name</div>
            <input
              value={todo.name}
              type="text"
              id="name"
              name="name"
              onChange={onChange}
            />
          </label>
        </div>
        <div className="field_container">
          <label htmlFor="description">
            <div>description</div>
            <input
              value={todo.description}
              type="text"
              id="description"
              name="description"
              onChange={onChange}
            />
          </label>
        </div>
      </div>
      <div className="button_container"></div>
      <Button
        color="blue"
        onClick={() =>
          addTodo({ name: todo.name, description: todo.description })
        }
      >
        {" "}
        ADD
      </Button>
    </div>
  );
};

export default TodoPanel;
