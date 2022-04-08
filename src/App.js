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

const toDoData = ["Wash car", "Clean Room"];
//need a way to push more into the array -- .push

const myFunction = (event) => {
  setToDos(event.target.value);
};

export default function App() {
  const [todos, setToDos] = useState(toDoData);

  return (
    <Styled className="App">
      <h1>TODO LIST APP</h1>
      <InputElement type="text" onkeydown={myFunction}></InputElement>
      <ToDoList>
        {todos.map((todo) => (
          <p key={todo}> {todo} </p>
        ))}
      </ToDoList>
    </Styled>
  );
}
