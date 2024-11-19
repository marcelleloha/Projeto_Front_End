import styled from "styled-components";

const Top = styled.header`
  background-color: #f5f5f5;
  margin: 0;
  
  
  
  @media (min-width: 1000px) {
    

    background-Color: #f5f5f5;
    
    #navbar {
      display: flex;
      justify-content: space-between;
      padding: 0 100px;
      align-items: center;
    }
  
    #navegacao {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap: 50px;

    }
  
    a {
      text-decoration: none;
      text-align: center;
      color: #424242;
      font-size: 14px;
      padding-top: 28px
  
    }
    
    img {
      width: 70px
    }
    
    #menu-hamburger {
      display: none;
    }
  }


  @media (max-width: 1000px) {


    #navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 50px;
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



`;

export { Top };
