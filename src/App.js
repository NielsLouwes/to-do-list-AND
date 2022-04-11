import "./styles.css";
import styled from "styled-components";
import { useState } from "react";
import Archive from "./Archive";

const Styled = styled.div``;

const InputElement = styled.input`
  width: 50%;
  height: 2vh;
  position: relative;
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

const Completed = styled.p`
  color: lightgray;
  position: absolute;
  bottom: 0;
  left: 0;
  margin-left: 5px;
`;

const toDoData = ["Write", "Clean Room"];
const removedItems = ["Code"];

export default function App() {
  const [todos, setToDos] = useState(toDoData);
  const [todo, setToDo] = useState("");
  const [removedItem, setRemovedItem] = useState(removedItems);

  // add new to do
  const addToDo = (event) => {
    if (event.key === "Enter") {
      const newToDos = [...todos, event.target.value];
      setToDos(newToDos);
    }
  };

  // remove to do
  const handleDeleteClick = (name) => {
    const removeItem = todos.filter((todo) => {
      if (todo === name) {
        removedItems.push(todo);
      }
      return todo !== name;
    });
    setToDos(removeItem);
  };

  return (
    <Styled className="App">
      <h1>TODO LIST APP</h1>
      <InputElement placeholder="Type here..." onKeyDown={addToDo} />
      <ToDoList>
        {todos.map((todo) => (
          <>
            <ListItemContainer>
              <p onClick={handleDeleteClick} key={todo}>
                {" "}
                {todo}{" "}
              </p>
              <button>x</button>
            </ListItemContainer>
          </>
        ))}
        <Completed>Completed Items </Completed>
      </ToDoList>
      <Archive removedItem={removedItem} />
    </Styled>
  );
}
