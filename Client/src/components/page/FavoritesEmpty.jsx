import styled from "styled-components";

const FavoritesEmpty = () => {
  return (
    <PageEmpty>
      <h1>
        NO TIENES FAVORITOS AUN, AGREGA TUS PERSONAJES Y PODRAS VISUALIZARLOS EN
        ESTA SECCION
      </h1>
    </PageEmpty>
  );
};

export default FavoritesEmpty;

const PageEmpty = styled.div`
  padding: 20px;
  h1 {
    color: black;
    font-family: arial;
    margin-top: 30vh;
    text-align: center;
  }
`;
