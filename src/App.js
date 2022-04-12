import React, { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./styles.css";

export default function App() {
  const [todoValue, setTodoValue] = useState("");
  return (
    <div className="App">
      <header>
        <h1>To Do List </h1>
        <Form />
        <TodoList />
      </header>
    </div>
  );
}
