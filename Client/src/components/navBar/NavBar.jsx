import React from "react";
import Logo from "../../assets/RickAndMorty.png";

import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <StyleNav>
      <div>
        <img src={Logo} />
      </div>
      <ul>
        <NavLink to={"Home"}>
          <li>Home</li>
        </NavLink>
        <NavLink to={"Favorites"}>
          <li>Favorites</li>
        </NavLink>

        <NavLink to={"/"}>
          <li>Logout</li>
        </NavLink>
      </ul>
    </StyleNav>
  );
};

export default NavBar;

const StyleNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: auto;

  img {
    width: 200px;
    // margin-right: 0%;
  }

  ul {
    display: flex;
    gap: 100px;
    list-style: none;
  }

  li {
    font-size: 1rem;
    font-family: Arial, sans-serif;
    font-weight: bold;
    cursor: pointer;
  }
`;
