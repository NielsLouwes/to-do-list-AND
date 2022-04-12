import "./styles.css";
import styled from "styled-components";
import { useState } from "react";
import Header from "./Header";

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

export default function App() {
  const [inputText, setInputText] = useState("");
  // // add new to do
  // const addToDo = (event) => {
  //   if (event.key === "Enter") {
  //     const newToDos = [...todos, event.target.value];
  //     let itemExists = todos.indexOf(event.target.value) > 1;
  //     if (!itemExists) {
  //       setToDos(newToDos);
  //     }
  //     return;
  //   }
  // };

  // // remove to do
  // const handleDeleteClick = (name) => {
  //   const removeItem = todos.filter((todo) => {
  //     if (todo === name) {
  //       removedItems.push(todo);
  //     }
  //     return todo !== name;
  //   });
  //   setToDos(removeItem);
  // };

  return (
    <Styled className="App">
      <Header />
      <InputElement setInputText={setInputText} placeholder="Type here..." />
      <ToDoList>
        {/* {todos.map((todo) => (
          <>
            <ListItemContainer>
              <p key={todo}> {todo} </p>
              <button>x</button>
            </ListItemContainer>
          </> */}
        {/* ))} */}
        <Completed>Completed Items </Completed>
      </ToDoList>
      {/* <Link to="/archive">Archive</Link> <Archive removedItem={removedItem} /> */}
    </Styled>
  );
}
