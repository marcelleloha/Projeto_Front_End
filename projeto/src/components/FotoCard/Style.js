import styled from "styled-components";

const FotoArticle = styled.article`
  width: 20em;
  background-color: var(--detalhe);
  padding: .5em;
  position: relative;
  

  figure {
    margin: .5rem 0 0 0;
    
  }
  
  img {
    object-fit: cover;
    width: 100%;
    height: 22em;
  }

  h3{
    margin: 0;
    display: block;
    text-align: center;
    line-height: 3rem;
    text-transform: uppercase;
    background-color: var(--primaria);
    color: var(--secundaria);
  }

  figcaption {
    display: block;
    background-color: var(--secundaria);
    text-align: center;
    margin-top: .5rem;

    a {
      text-decoration: none;
    }
  }
`

export {FotoArticle}