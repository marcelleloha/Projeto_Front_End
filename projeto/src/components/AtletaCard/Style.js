import styled from "styled-components";

const Card = styled.article`
  width: 15rem;
  background-color: var(--detalhe);
  padding: .5em;
  position: relative;
  border-radius: 10px;

  
  div.nome{
    background-color: var(--primaria);
    color: var(--secundaria);
    text-align: center;
    font-size: larger;
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 10px;
  }

  figure {
    margin: .5rem 0 0 0;
  }

  img {
    object-fit: contain;
    width: 100%;
    height: 22rem;
    border-radius: 10px;
  }

`;

export {Card};