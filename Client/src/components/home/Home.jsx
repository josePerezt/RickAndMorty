import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Cards from "../cards/Cards";
import Button from "../button/Button";

const Home = () => {
  return (
    <StyleHome>
      <Cards />
      <ContainerBTN>
        <Button>NEXT</Button>
        <Button>PREV</Button>
      </ContainerBTN>
    </StyleHome>
  );
};

export default Home;

const StyleHome = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const ContainerBTN = styled.div`
  display: flex;
  margin: 15px 0 15px 0;
  gap: 15px;
`;
