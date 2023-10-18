import React from "react";
import Logo from "../../assets/RickAndMorty.png";
import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const currentUser = useSelector((state) => state.currentUser);
  return (
    <StyleNav id="navBar" className="position">
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
        <NavLink to={"detail"}>
          <li>Detail</li>
        </NavLink>

        <NavLink to={"/"}>
          <li>Logout</li>
        </NavLink>
        <li>{currentUser.email}</li>
      </ul>
    </StyleNav>
  );
};

export default NavBar;

const StyleNav = styled.nav`
  background-color: #000;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;

  img {
    width: 200px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 100px;
    list-style: none;
  }

  li {
    font-size: 1rem;
    font-family: Arial, sans-serif;
    font-weight: bold;
    cursor: pointer;
    color: #fff;
  }
`;
