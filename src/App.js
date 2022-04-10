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

const toDoData = ["Write", "Clean Room"];

export default function App() {
  const [todos, setToDos] = useState(toDoData);

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
      return todo !== name;
    });
    setToDos(removeItem);
  };

  // function handleDeleteClick(id) {
  //   // here we are filtering - the idea is remove an item from the todo array on a button click
  //   const removeItem = todos.filter((todo) => {
  //     // return the rest of the todos that don't match the item we are deleting
  //     return todo.id !== id;
  //   });
  //   // removeItem returns a new array - so now we are setting the todos to the new array
  //   setTodos(removeItem);
  // }

  return (
    <Styled className="App">
      <h1>TODO LIST APP</h1>
      <InputElement
        placeholder="Type here..."
        type="text"
        onKeyDown={addToDo}
      ></InputElement>
      <ToDoList>
        {todos.map((todo) => (
          <>
            <ListItemContainer>
              <p onClick={handleDeleteClick} key={todo}>
                {" "}
                {todo}{" "}
              </p>
              <button>X</button>
            </ListItemContainer>
          </>
        ))}
      </ToDoList>
    </Styled>
  );
}
