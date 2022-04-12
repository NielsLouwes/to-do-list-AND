import React, { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./styles.css";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  //creating an object when creating new todo
  // const addNewToDo = (event) => {
  //   event.preventDefault();
  //   updateTodos((prevTodos) => [
  //     ...prevTodos,
  //     {
  //       id: Date.now(),
  //       text: newTodo,
  //       completed: false
  //     }
  //   ]);
  //   updateNewTodo("");
  // };

  return (
    <div className="App">
      <header>
        <h1>To Do List </h1>
        <Form
          setTodos={setTodos}
          setInputText={setInputText}
          todos={todos}
          inputText={inputText}
        />
        <TodoList />
      </header>
    </div>
  );
}
