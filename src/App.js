import React, { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./styles.css";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>To Do List </h1>
      </header>
      <Form
        setTodos={setTodos}
        setInputText={setInputText}
        todos={todos}
        inputText={inputText}
      />
      <TodoList todos={todos} />
    </div>
  );
}
