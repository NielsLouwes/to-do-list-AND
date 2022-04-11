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

export default Archive = ({ removedItem }) => {
  return (
    <Styled>
      {removedItem.map((item) => (
        <>
          <ListItemContainer>
            <p key={item}> {item} </p>
            <button>x</button>
          </ListItemContainer>
        </>
      ))}
    </Styled>
  );
};
