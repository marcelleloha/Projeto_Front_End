import styled from "styled-components";

const TopPart = styled.header`
  background-color: rgb(0, 37, 85);
  padding-left: 100px;
  padding-right: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;

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
    color: white;
  }

  img {
    height: 27rem;
    position: relative;
    top: 4px;
  }

  #Hero {
    display: flex;
    flex-direction: row;  
    justify-content: space-between;
    align-items: center;
  }

  #HeroEsquerda {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  #HeroDireita {
    width: 50%;
  }

  #botoes {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 40px;
    margin-top: 20px;
  }

  button {
    border-radius: 20px;
    padding: 10px;
  }

  #botao1 {
    background-color: #F5AC00;
    border: 0;
  }

  #botao2 {
    background-color: #F5F5F5;
    border: 2px solid #F5AC00;
  }

  @media (max-width: 1024px) {
    padding-left: 50px;
    padding-right: 50px;

    #tituloreal {
      font-size: 42px;
    }

    #texto {
      font-size: 16px;
      width: 350px;
    }

    img {
      height: 500px;
    }

    #Hero {
      flex-direction: column;
    }

    #HeroEsquerda {
      width: 100%;
    }

    #HeroDireita {
      width: 100%;
      margin-top: 20px;
    }

    #botoes {
      flex-direction: column;
      gap: 20px;
      width: 100%;
      margin-top: 20px;
    }
  }

  @media (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;

    #Hero {
      flex-direction: column;  
    }

    #HeroEsquerda {
      width: 100%;
    }

    #HeroDireita {
      width: 100%;
      margin-top: 20px;  
    }

    #tituloreal {
      font-size: 36px;
    }

    #texto {
      width: 100%;
      font-size: 14px;
    }

    img {
      height: 400px;
    }

    #botoes {
      flex-direction: column; 
      gap: 20px; 
      width: 100%; 
      margin-top: 20px;  
    }
  }

  @media (max-width: 480px) {
    padding-top: 40px;
    padding-bottom: 40px;

    #tituloreal {
      font-size: 32px;
    }

    #texto {
      font-size: 12px;
    }

    img {
      height: 250px;
    }

    #botoes {
      flex-direction: column;
      gap: 20px;
      width: 100%;
    }
  }
`;

export { TopPart };
