import React from "react";
import Logo from "../../assets/RickAndMorty.png";
import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../../redux/actions";

const NavBar = () => {
  const currentUser = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();
  const handlerLogout = () => {
    dispatch(Logout());
  };
  return (
    <StyleNav id="navBar" className="position">
      <div>
        <img src={Logo} />
      </div>
      <ul>
        <NavLink to={"home"} className="link">
          <li>Home</li>
        </NavLink>
        <NavLink to={"favorites"} className="link">
          <li>Favorites</li>
        </NavLink>
        <NavLink to={"detail"} className="link">
          <li>Detail</li>
        </NavLink>

        <NavLink to={"/"} className="link">
          <li onClick={handlerLogout}>Logout</li>
        </NavLink>
        <li>{currentUser.email}🟢</li>
      </ul>
    </StyleNav>
  );
};

export default NavBar;

const StyleNav = styled.nav`
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

  .link {
    text-decoration: none;
  }
`;
