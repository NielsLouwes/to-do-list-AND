import { useState } from "react";
import styled from "styled-components";

const Styled = styled.div``;

const InputElement = styled.input`
  width: 50%;
  height: 2vh;
`;

const Form = styled.form``;

export default InputElement = () => {
  return (
    <Styled>
      <Form>
        <InputElement type="text"></InputElement>
      </Form>
    </Styled>
  );
};
