import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Cards from "../cards/Cards";
import Button from "../button/Button";
import Swal from "sweetalert2";

import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "../../redux/actions";

const Home = () => {
  const { info } = useSelector((state) => state.allCharacters);
  const numPage = useSelector((state) => state.numPage);
  const user = useSelector((state) => state.currentUser);
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
      dispatch(Pagination(numPage + 1));
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const handlerPagePrev = () => {
    const { prev } = info;
    console.log(prev);
    if (prev) {
      dispatch(Pagination(numPage - 1));

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const [hasShownAlert, setHasShownAlert] = useState(false);

  useEffect(() => {
    const hasShownAlertBefore = localStorage.getItem("hasShownAlert");
    if (!hasShownAlertBefore && !hasShownAlert) {
      Swal.fire({
        title: "Favorites",
        text: "haz click sobre el 🤍 y luego ve a la seccion de favoritos para ver tus personajes...",
        icon: "info",
      });
      localStorage.setItem("hasShownAlert", "true");

      // Actualiza el estado local para evitar futuras ejecuciones de la alerta
      setHasShownAlert(true);
    }
  }, [hasShownAlert]);

  return (
    <StyleHome>
      <Cards />
      <ContainerBTN>
        {info?.prev ? <Button onClick={handlerPagePrev}>PREV</Button> : null}
        <div className="container_count">
          <h3>{numPage}/42</h3>
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
    border: thin solid transparent;
    box-shadow: 1px 4px 12px 4px #d400ff;

    color: #fff;
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
    background-color: #161360;
    margin-right: -30vw;
    margin-left: 25vw;
    width: 50px;
    height: 50px;
    transition: background-color 0.5s;

    &:hover {
      background-color: blue;
    }
  }

  .link {
    color: #fff;
    font-weight: bold;
  }
`;
