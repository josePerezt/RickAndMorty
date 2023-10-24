import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Character, DeleteChar } from "../../redux/actions";
import imageDefault from "../../assets/defaultImage.png";
import Button from "../button/Button";
import styled from "styled-components";

const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const character = useSelector((state) => state.character);
  const dispatch = useDispatch();

  const { name, gender, status, species, origin, image } = character;

  useEffect(() => {
    if (id) {
      dispatch(Character(id));
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const handlerClick = () => {
    dispatch(DeleteChar());
    navigate("/home");
  };

  return (
    <Container>
      <ContainerText>
        <h2> {name ? name : "undefined"}</h2>
        <h3>GENDER: {gender ? gender : "undefined"}</h3>
        <h3>STATUS: {status ? status : "undefined"}</h3>
        <h3>SPECIES: {species ? species : "undefined"}</h3>
        <h3>ORIGIN: {origin ? origin : "undefined"}</h3>
      </ContainerText>
      <ContainerImage>
        {image ? (
          <img src={image} alt={name} className="image" />
        ) : (
          <img
            className="defaultImage"
            src={imageDefault}
            alt={"imageDefault"}
          />
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

  .containerBtn {
    margin-top: 30px;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const ContainerText = styled.div`
  text-align: center;
  border-radius: 8px;
  width: 40%;
  box-shadow: 2px 4px 10px 4px #d400ff;

  h2 {
    margin-top: 100px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 3rem;
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

  .defaultImage {
    width: 350px;
    height: 350px;
  }

  img {
    box-shadow: 2px 4px 10px 4px #d400ff;

    border-radius: 8px;
  }
`;
