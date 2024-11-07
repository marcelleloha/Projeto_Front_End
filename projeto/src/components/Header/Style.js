import styled from "styled-components"

const Top = styled.header`
  @media (min-width: 1000px) {
    
    background-color: white;
    margin: 0;
    padding-left: 100px;
    padding-right: 100px;
    background-Color: #f5f5f5;
    
    #navbar {
      display: flex;
      justify-content: space-between;
      
  
    }
  
    #navegacao {
      display: flex;
      justify-content: space-between;
      width: 400px
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
  
  @media (max-width: 420px) {

    img {
      width: 70px
    }
    #navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left: 20px;
      padding-right: 20px;
  
    }
    
    #navegacao {
      display: none; /* Oculta o menu normal */
    }
  
    #menu-hamburger {
      display: block; /* Mostra o menu sanduíche */
    }
  }

`

export {Top}