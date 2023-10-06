import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Cards = () => {
  const allCharacters = useSelector((state) => state.allCharacters);

  return (
    <div>
      {allCharacters?.map((items) => {
        return (
          <containerCards key={items.id}>
            <p>{items.name}</p>
            <img src={items.image} />
          </containerCards>
        );
      })}
    </div>
  );
};

export default Cards;

const containerCards = styled.div`
  display: flex;
  p {
    color: blue;
  }
`;
