import React, { useState } from "react";
import styled from "styled-components";
import Cards from "../cards/Cards";
import Button from "../button/Button";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "../../redux/actions";

const Home = () => {
  const [disabled, setDisabled] = useState(true);
  const [page, setPage] = useState(1);
  const { info } = useSelector((state) => state.allCharacters);
  const dispatch = useDispatch();

  const scrollToSection = () => {
    const section = document.getElementById("navBar");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handlerPageNext = () => {
    const { next } = info;
    if (!next) {
      setDisabled(true);
    } else {
      setPage(page + 1);
      dispatch(Pagination(page + 1));
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const handlerPagePrev = () => {
    const { prev } = info;
    if (prev) {
      setPage(page - 1);
      dispatch(Pagination(page - 1));

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <StyleHome>
      <Cards />
      <ContainerBTN>
        {info?.prev ? <Button onClick={handlerPagePrev}>PREV</Button> : null}
        <div className="container_count">
          <h3>{page}/42</h3>
        </div>
        {info?.next ? <Button onClick={handlerPageNext}>NEXT</Button> : null}
        <div className="container_link">
          <a className="link" onClick={scrollToSection}>
            ↑
          </a>
        </div>
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
  width: 100%;
  justify-content: center;
  .container_count {
    display: flex;
    justify-content: center;
    align-items: center;
    border: thin solid black;
    border-radius: 5px;
    border: thin solid #178a00c2;
    color: #178a00c2;
    width: 50px;
    height: 50px;
  }
  .container_link {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border: thin solid black;
    border-radius: 50%;
    border: thin solid transparent;
    background-color: #178a00c2;
    margin-right: -30vw;
    margin-left: 25vw;

    width: 50px;
    height: 50px;
  }
  .link {
    color: #fff;
    font-weight: bold;
  }
`;
