import styled from "styled-components";

const TopPart = styled.header`
  background-color: rgb(0, 37, 85);
  padding-left: 100px;
  padding-right: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  

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
    width: 50%;
    height: auto

  }

  


  #titulo {
    width: 50%
  }

  @media (min-width: 1000px) {
    padding: 20px 100px;

    #tituloreal {
      font-size: 42px;
    }

    #texto {
      font-size: 16px;
      width: 350px;
    }
    #imagem{
    display: flex;
    justify-content: end;
    width: 50%
  }


  }

  @media (max-width: 1000px) {
    padding: 20px 50px;


    #tituloreal {
      font-size: 36px;
    }

    #texto {
      width: 50%;
      font-size: 20px;
    }

    #imagem{
      display: flex;
      justify-content: end;
      width: 50%
      }
      img {
        width: 50%
      }
      
    }
    
    @media (max-width: 768px) {
      padding: 20px 50px;
      
      #tituloreal {
        font-size: 20px;
      }
      
      #texto {
        font-size: 12px;
      }
      
      #imagem{
        display: flex;
        justify-content: end;
        width: 50%
      }
      
      img {
        width: 150px
      }

  }
`;

export { TopPart };
