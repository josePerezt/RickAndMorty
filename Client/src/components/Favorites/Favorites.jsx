import React from "react";
import { useSelector } from "react-redux";
import Card from "../card/Card";
import FavoritesEmpty from "../page/FavoritesEmpty";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites);

  return (
    <div>
      {favorites.length ? (
        favorites.map((items) => {
          return (
            <div key={items.id}>
              <Card items={items} />;
            </div>
          );
        })
      ) : (
        <FavoritesEmpty />
      )}
    </div>
  );
};

export default Favorites;
