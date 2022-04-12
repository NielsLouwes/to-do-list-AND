import React, { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./styles.css";

export default function App() {
  const [newTodo, updateNewTodo] = useState("");
  const [todos, updateTodos] = useState([]);

  //creating an object when creating new todo
  const addNewToDo = (event) => {
    event.preventDefault();
    updateTodos((prevTodos) => [
      ...prevTodos,
      {
        id: Date.now(),
        text: newTodo,
        completed: false
      }
    ]);
    updateNewTodo("");
  };

  console.log(todos);

  return (
    <div className="App">
      <header>
        <h1>To Do List </h1>
        <Form handleChange={addNewToDo} />
        <TodoList handleChange={addNewToDo} />
      </header>
    </div>
  );
}
