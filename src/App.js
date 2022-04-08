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

const ListItemContainer = styled.div`
  display: flex;
  justify-content: space-around;

  button {
    height: 4vh;
    width: 4vw;
    margin-top: 10px;
  }
`;

const toDoData = ["Wash Car", "Clean Room"];
//need a way to push more into the array -- .push

export default function App() {
  const [todos, setToDos] = useState(toDoData);

  const addToDo = (event) => {
    if (event.key === "Enter") {
      const newToDos = [...todos, event.target.value];
      setToDos(newToDos);
    }
  };

  console.log(...todos);

  return (
    <Styled className="App">
      <h1>TODO LIST APP</h1>
      <InputElement type="text" onKeyDown={addToDo}></InputElement>
      <ToDoList>
        {todos.map((todo) => (
          <>
            <ListItemContainer>
              <p key={todo}> {todo} </p>
              <button>X</button>
            </ListItemContainer>
          </>
        ))}
      </ToDoList>
    </Styled>
  );
}
