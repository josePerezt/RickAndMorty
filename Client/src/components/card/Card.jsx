import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
// import { CharactersId } from "../../redux/actions";

const Card = ({ items }) => {
  return (
    <Link to={`/detail/${items.id}`}>
      <ContainerCard>
        <img src={items.image} />
        <div>
          <p>{items.name}</p>
        </div>
      </ContainerCard>
    </Link>
  );
};

export default Card;

const ContainerCard = styled.div`
  display: flex;
  position: relative;
  width: 250px;
  height: 350px;
  margin: 25px 0 15px 0;
  cursor: pointer;
  border-radius: 8px;
  box-shadow: 2px 4px 10px 4px #292727a2;

  // border: thin solid blue;

  img {
    overflow: hidden;
    object-fit: cover;
    border-radius: 8px;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0 0 8px 8px;
    width: 100%;
    height: 40px;
    margin-top: 310px;
    position: absolute;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    color: #fff;
    background-color: #000000c2;
  }
`;
