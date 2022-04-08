import "./styles.css";
import styled from "styled-components";

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

export default function App() {
  return (
    <Styled className="App">
      <h1>TODO LIST APP</h1>
      <InputElement />
      <Button type="submit"></Button>
      <ToDoList> Does this work?</ToDoList>
    </Styled>
  );
}
