import { useState } from "react";
import styled from "styled-components";

const Styled = styled.div``;

const ListItemContainer = styled.div`
  display: flex;
  justify-content: space-around;

  button {
    height: 4vh;
    width: 4vw;
    margin-top: 10px;
  }
`;

export default Header = () => {
  return (
    <Styled>
      <h1>TODO LIST APP</h1>
    </Styled>
  );
};
