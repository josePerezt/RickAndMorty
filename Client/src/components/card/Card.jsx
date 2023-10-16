import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { styled } from "styled-components";
import { CharFav, RemoveFav } from "../../redux/actions";

const Card = ({ items }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const { id, name, image } = items;

  const handlerFavorite = () => {
    if (location.pathname === "/Home") {
      const fav = {
        id,
        name,
        image,
      };
      dispatch(CharFav(fav));
    } else {
      const charRemove = {
        id,
        name,
        image,
      };

      dispatch(RemoveFav(charRemove));
    }
  };

  // console.log(location.pathname);
  return (
    <ContainerCard>
      {location.pathname === "/Favorites" ? (
        <p className="favorite" onClick={handlerFavorite}>
          💗
        </p>
      ) : (
        <p className="favorite" onClick={handlerFavorite}>
          🤍
        </p>
      )}
      <Link to={`/detail/${id}`}>
        <img src={image} />
      </Link>
      <div>
        <p>{name}</p>
      </div>
    </ContainerCard>
  );
};

export default Card;

const ContainerCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  width: 250px;
  height: 300px;
  margin: 25px 0 15px 0;
  cursor: pointer;
  border-radius: 8px;
  box-shadow: 2px 4px 10px 4px #292727a2;

  .favorite {
    position: absolute;
    font-size: 2rem;
    margin:0 80% 100% 0;
  }
  img {
    height:200px
    max-width: 100%;
    max-height: 100%;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0 0 8px 8px;
    width: 100%;
    height: 40px;
    margin-top: 260px;
    position: absolute;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    color: #fff;
    background-color: #000000c2;
  }
`;
