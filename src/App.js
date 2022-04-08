import "./styles.css";
import styled from "styled-components";
import { useState } from "react";

const Styled = styled.div``;

const InputElement = styled.input`
  width: 50%;
  height: 2vh;
`;

const ToDoList = styled.div`
  border: 1px solid black;
  height: 50vh;
  width: 50%;
  margin: auto;
  margin-top: 15px;
`;

const Button = styled.button`
  height: 3vh;
  width: 2vw;
  margin-left: 5px;
  margin-top: 5px;
`;

const toDoData = [{ id: 1, value: "wash car" }];

// function addTask(name) {
//   const newTask = { id: "todo" + nanoid(), name: name, completed: false };
//   setTasks([...tasks, newTask]);
// }

export default function App() {
  const [todos, setToDos] = useState(toDoData);

  return (
    <Styled className="App">
      <h1>TODO LIST APP</h1>
      <InputElement></InputElement>
      <ToDoList>
        {todos.map((todo) => (
          <p> {todo.value} </p>
        ))}
      </ToDoList>
    </Styled>
  );
}
