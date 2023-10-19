import React from "react";
import { useSelector } from "react-redux";
import Card from "../card/Card";
import FavoritesEmpty from "../page/FavoritesEmpty";
import styled from "styled-components";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites);

  return (
    <ContainerFav>
      {favorites.length ? (
        favorites.map((items) => {
          return (
            <div key={items.id} className="containerCard">
              <Card items={items} />
            </div>
          );
        })
      ) : (
        <FavoritesEmpty />
      )}
    </ContainerFav>
  );
};

export default Favorites;

const ContainerFav = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .containerCard {
    display: flex;
    padding: 0 10px 0 10px;
    margin: 25px;
  }
`;
