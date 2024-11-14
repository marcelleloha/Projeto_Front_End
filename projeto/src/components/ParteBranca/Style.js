import styled from "styled-components";

const TopPart = styled.header`
  background-color: #F5F5F5;


  #topnav {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }

  #titulo {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  #tituloreal {
    font-weight: bold;
    font-size: 54px;
  }

  #texto {
    font-size: 18px;
    width: 450px;
    font-weight: lighter;
  }

  p {
    color: black;
  }

  #Hero {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  img {
    height: 700px;
  }

  #HeroEsquerda {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  button {
    border-radius: 20px;
    padding: 10px;
  }

  #botoes {
    display: flex;
    flex-direction: row;
    justify-content: start;
    gap: 40px;
  }

  #botao1 {
    background-color: #f5ac00;
    border: 0;
  }

  #botao2 {
    background-color: #f5f5f5;
    border: 2px solid #f5ac00;
  }

  #conteudo-azul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  #imagemProjeto {
    width: 50%;
    height: 50%;
  }

  #parteAzul {
    background-color: #002555;
  }

  @media (min-width: 1000px) {
    padding: 70px 100px;
  }
  @media (max-width: 1000px) {
    padding: 50px 50px;
    #Hero {
      display: flex;
      flex-direction: column;
      
    }
    #HeroEsquerda {
      padding-bottom: 20px
    }
    #titulo{
      display: flex;
      justify-content: center;
      align-items: center;
    }
    #tituloreal{
      font-size: 30px;
      text-align: center;
    }
    #texto {
      text-align: center;
    }
    img {
      height: 350px
    }
  }
  @media (max-width: 768px) {
    padding: 50px 50px;
    #Hero {
      display: flex;
      flex-direction: column;
      
    }
    #HeroEsquerda {
      padding-bottom: 20px
    }
    #titulo{
      display: flex;
      justify-content: center;
      align-items: center;
    }
    #tituloreal{
      font-size: 30px;
      text-align: center;
    }
    #texto {
      text-align: center;
    }
    img {
      height: 350px
    }
  }
`;

const Azul = styled.header`
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 70px;
  padding-bottom: 70px;
  background-color: #002555;
  color: white;

  #titulo {
    font-size: 54px;
    font-weight: bold;
    padding-bottom: 20px;
  }

  #conteudo-azul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 30px;
  }

  #imagemProjeto {
    width: 45%;
    height: 45%;
  }

  #parteAzul {
    background-color: #002555;
  }

  @media (max-width: 768px) {
    padding: 20px 40px;

    #titulo {
      font-size: 36px;
    }

    #conteudo-azul {
      flex-direction: column;
      font-size: 15px;
    }

    #imagemProjeto {
      width: 100%;
      height: auto;
    }
  }
`;

const Terceiro = styled.header`
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 70px;
  padding-bottom: 90px;
  background-color: #f5f5f5;
  color: black;

  @media (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  #imagemTime {
    width: 100%;
    height: auto;
    max-width: 1074px;
    max-height: 653px;
  }

  @media (max-width: 1024px) {
    #imagemTime {
      max-width: 90%;
      max-height: auto;
    }
  }

  @media (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;

    #imagemTime {
      max-width: 85%;
      height: auto;
    }
  }

  @media (max-width: 480px) {
    #imagemTime {
      max-width: 100%;
      height: auto;
      padding-top: 5px;
    }
  }
`;

export { TopPart, Azul, Terceiro };
