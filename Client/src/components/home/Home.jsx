import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Cards from "../cards/Cards";

const Home = () => {
  return (
    <StyleHome>
      <Cards />
    </StyleHome>
  );
};

export default Home;

const StyleHome = styled.div`
  display: flex;
  justify-content: center;
  border: thin solid red;
`;
