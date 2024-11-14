import styled from "styled-components";

const Top = styled.header`
  background-color: #f5f5f5;
  margin: 0;
  
  @media (min-width: 1000px) {
    padding-left: 100px;
    padding-right: 100px;

    #navbar {
      display: flex;
      justify-content: space-between;
    }

    #navegacao {
      display: flex;
      justify-content: space-between;
      width: 400px;
    }

    a {
      text-decoration: none;
      text-align: center;
      color: #424242;
      font-size: 14px;
      padding-top: 28px;
    }

    img {
      width: 70px;
    }

    #menu-hamburger {
      display: none;
    }
  }

  
  @media (max-width: 420px) {

    img {
      width: 70px
    }

    img {
      width: 60px;
    }
  }

  @media (max-width: 600px) {
    padding-left: 20px;
    padding-right: 20px;

    #navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    #navegacao {
      display: none; 
    }
  
    #menu-hamburger {
      display: block; 
    }

    img {
      width: 50px;
    }
  }

  @media (max-width: 400px) {
    padding-left: 10px;
    padding-right: 10px;

    a {
      font-size: 12px;
      padding-top: 20px;
    }

    img {
      width: 45px;
    }
  }
`;

export { Top };
