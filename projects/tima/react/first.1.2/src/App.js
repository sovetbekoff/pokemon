import React, { useState } from "react";
import AddTodo from "./components/Addtodo/AddTodo";
import TodoList from "./components/Todolist/TodoList";
import EditTodo from "./components/Edit/EditTodo";
import Example from "./components/Exapmle/Example";

const App = () => {
  // создадим состояние, создаем в App.js компоненте
  const [todos, setTodos] = useState([]);
  const [editedObj, setEditedObj] = useState(null);

  function handleTask(newObj) {
    let newTodos = [...todos];
    newTodos.push(newObj);
    setTodos(newTodos);
  }
  function deleteTask(clas) {
    let delTodos = todos.filter((task) => task.id !== clas);
    setTodos(delTodos);
  }
  function getEditedObj(id) {
    let oneObj = todos.find((item) => item.id === id);
    setEditedObj(oneObj);
  }
  function saveChanges(newObj) {
    let newTodos = [...todos];
    newTodos = newTodos.map((item) => {
      if (item.id === newObj.id) {
        return newObj;
      } else {
        return item;
      }
    });
    setTodos(newTodos);
    setEditedObj(null);
  }

  return (
    <div>
      <AddTodo handleTask={handleTask} />
      <TodoList
        deleteTask={deleteTask}
        todos={todos}
        getEditedObj={getEditedObj}
      />
      {editedObj ? (
        <EditTodo editedObj={editedObj} saveChanges={saveChanges} />
      ) : null}
      <Example />
      {/* <ResponsiveDrawer /> */}
    </div>
  );
};

export default App;

// import React, { useState } from "react";
// import AddTodo from "./components/Addtodo/AddTodo";
// import TodoList from "./components/Todolist/TodoList";
// import EditTodo from "./components/Edit/EditTodo";
// // import Example from "./components/Drawer/ResponsiveDrawer";

// const App: React.FC = () => {
//   const [todos, setTodos] = useState<Task[]>([]);
//   const [editedObj, setEditedObj] = useState<Task | null>(null);

//   interface Task {
//     task: string;
//     status: boolean;
//     id: number;
//   }

//   function handleTask(newObj: Task) {
//     let newTodos = [...todos];
//     newTodos.push(newObj);
//     setTodos(newTodos);
//   }

//   function deleteTask(id: number) {
//     let delTodos = todos.filter((task) => task.id !== id);
//     setTodos(delTodos);
//   }

//   function getEditedObj(id: number) {
//     let oneObj = todos.find((item) => item.id === id);
//     setEditedObj(oneObj || null);
//   }

//   function saveChanges(newObj: Task) {
//     let newTodos = [...todos];
//     newTodos = newTodos.map((item) => {
//       if (item.id === newObj.id) {
//         return newObj;
//       } else {
//         return item;
//       }
//     });
//     setTodos(newTodos);
//     setEditedObj(null);
//   }

//   return (
//     <div>
//       <AddTodo handleTask={handleTask} />
//       <TodoList
//         deleteTask={deleteTask}
//         todos={todos}
//         getEditedObj={getEditedObj}
//       />
//       {editedObj ? (
//         <EditTodo editedObj={editedObj} saveChanges={saveChanges} />
//       ) : null}
//     </div>
//   );
// };

// export default App;
