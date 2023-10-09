import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Character, DeleteChar } from "../../redux/actions";
import image from "../../assets/defaultImage.png";
import Button from "../button/Button";
import styled from "styled-components";

const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const characterId = useSelector((state) => state.character);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Character(id));
    console.log(characterId);
  }, []);

  const handlerClick = () => {
    dispatch(DeleteChar());
    navigate("/home");
  };

  return (
    <Container>
      <ContainerText>
        <h2> {characterId.name}</h2>
        <h3>GENDER: {characterId.gender}</h3>
        <h3>STATUS: {characterId.status}</h3>
        <h3>SPECIES: {characterId.species}</h3>
        <h3>ORIGIN: {characterId.origin}</h3>
      </ContainerText>
      <ContainerImage>
        {characterId.image ? (
          <img
            src={characterId.image}
            alt={characterId.name}
            className="image"
          />
        ) : (
          <img className="defaultImage" src={image} alt={"imageDefault"} />
        )}
      </ContainerImage>
      <div className="containerBtn">
        <Button onClick={handlerClick}>BACK</Button>
      </div>
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  height: 100vh;
  margin-top: 15px;
  // border: thin solid red;
  .containerBtn {
    margin-top: 30px;
    width: 100%;
    // border: thin solid green;
    display: flex;
    justify-content: center;
  }
`;

const ContainerText = styled.div`
  text-align: center;
  border-radius: 8px;
  box-shadow: 2px 4px 10px 4px #555555a2;
  // border: thin solid yellow;

  h2 {
    margin-top: 100px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 4rem;
  }

  h3 {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 2;
  }
`;

const ContainerImage = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  margin-top: 15px;

  // border: thin solid blue;

  .defaultImage {
    width: 350px;
    height: 350px;
  }

  img {
    box-shadow: 2px 4px 10px 4px #555555a2;

    border-radius: 8px;
  }
`;
