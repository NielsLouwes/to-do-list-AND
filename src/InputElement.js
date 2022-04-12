import { useState } from "react";
import styled from "styled-components";

const Styled = styled.div``;

const InputElement = styled.input`
  width: 50%;
  height: 2vh;
`;

const Form = styled.form``;

export default InputElement = ({ setInputText }) => {
  const inputTextHandler = (event) => {
    console.log(event.target.value);
    setInputText(event.target.value);
  };

  return (
    <Styled>
      <Form>
        <InputElement onChange={inputTextHandler} type="text"></InputElement>
      </Form>
    </Styled>
  );
};
