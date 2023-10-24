import styled from "styled-components";

const FavoritesEmpty = () => {
  return (
    <PageEmpty>
      <h1>
        NO TIENES FAVORITOS AUN, AGREGA TUS PERSONAJES Y PODRAS VISUALIZARLOS EN
        ESTA SECCION
      </h1>
      <div className="loader"></div>
    </PageEmpty>
  );
};

export default FavoritesEmpty;

const PageEmpty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 83vh;
  padding: 20px;
  h1 {
    color: #fff;
    font-family: arial;

    text-align: center;
  }

  .loader {
    width: 100px;
    aspect-ratio: 1;
    padding: 10px;
    box-sizing: border-box;
    display: grid;
    background: #fff;
    filter: blur(5px) contrast(10) hue-rotate(180deg);
    mix-blend-mode: darken;
  }
  .loader:before,
  .loader:after {
    content: "";
    grid-area: 1/1;
    margin: 30px 0;
    border-radius: 100px;
    background: #ff00ff;
    animation: l4 2s infinite linear;
  }
  .loader:after {
    --s: -1;
  }
  @keyframes l4 {
    100% {
      transform: rotate(calc(var(--s, 1) * 1turn));
    }
  }
`;
