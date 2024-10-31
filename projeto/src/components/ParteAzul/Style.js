import styled from "styled-components"

const TopPart = styled.header `

  @media (min-width: 1000px) {
    
    background-color: rgb(0, 37, 85);
    padding-left: 100px;
    padding-right: 100px;
    height: 500px;
  
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
      top: 25px;
      width: 400px;
    }
  }
  
  @media (max-width:400px) {
    padding-left: 20px;
    padding-right: 20px;
    background-color: rgb(0, 37, 85);
    padding-top: 20px;
    text-align: center;
    #titulo {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: fit-content;
      padding-bottom: 20px;
    }
    #texto {
      font-size: 15px;
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
      text-align: right;
      width: 200px;

    }
  }


`


export {TopPart}