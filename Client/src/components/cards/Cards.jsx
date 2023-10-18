import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Card from "../card/Card";

const Cards = () => {
  const { cleanData } = useSelector((state) => state.allCharacters);

  return (
    <ContainerCards>
      {cleanData?.map((items) => {
        return (
          <div key={items.id}>
            <Card items={items} />
          </div>
        );
      })}
    </ContainerCards>
  );
};

export default Cards;

const ContainerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0 10px 0 10px;
  gap: 20px;
`;
