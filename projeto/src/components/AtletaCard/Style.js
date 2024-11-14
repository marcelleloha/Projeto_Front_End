import styled from "styled-components";

const Card = styled.article`
  width: 15rem;
  background-color: var(--detalhe);
  padding: 0.5em;
  position: relative;
  border-radius: 10px;

  div.nome {
    background-color: var(--primaria);
    color: var(--secundaria);
    text-align: center;
    font-size: larger;
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 10px;
  }

  figure {
    margin: 0.5rem 0 0 0;
  }

  img {
    object-fit: contain;
    width: 100%;
    height: 22rem;
    border-radius: 10px;
  }

  @media (max-width: 1024px) {
    width: 13rem;
    padding: 0.7em;
  }

  @media (max-width: 768px) {
    width: 12rem;
    padding: 1em;
    height: auto;

    img {
      height: 18rem;
    }
  }

  @media (max-width: 480px) {
    width: 10rem;
    padding: 0.8em;
    height: auto;

    img {
      height: 15rem;
    }

    div.nome {
      font-size: 0.9rem;
    }
  }
`;

export { Card };
