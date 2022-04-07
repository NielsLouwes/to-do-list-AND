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

export default function App() {
  return (
    <Styled className="App">
      <h1>TODO LIST APP</h1>
      <InputElement></InputElement>
      <ToDoList></ToDoList>
    </Styled>
  );
}
