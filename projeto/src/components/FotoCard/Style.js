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

  @media (max-width: 768px) {
    width: 90%;
    margin: 0 auto;

    img {
      height: 18em;
    }

    h3 {
      font-size: 1.5rem;
      line-height: 2.5rem;
    }

    figcaption {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: .5em;

    img {
      height: 15em;
    }

    h3 {
      font-size: 1.2rem;
      line-height: 2rem;
    }

    figcaption {
      font-size: 0.8rem;
    }
  }
`;

export {FotoArticle};
