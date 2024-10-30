import styled from "styled-components"

const TopPart = styled.header `

  @media (min-width: 1000px) {
    
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
      position: relative;
      top: 4px;
      width: 500px;
    }
  }
  
  @media (max-width:400px) {
    padding-left: 20px;
    padding-right: 20px;
    background-color: rgb(0, 37, 85);
    padding-top: 20px;
    #titulo {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: fit-content;
    }
    #texto {
      font-size: 18px;
      font-weight: lighter;
    }
    #tituloreal {
      font-weight: bold;
      font-size: 32px;
    }
    p {
      color: white;
    }
    img {

      width: 300px;

    }
  }


`


export {TopPart}