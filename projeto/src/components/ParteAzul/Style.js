import styled from "styled-components"

const TopPart = styled.header `
  background-color: rgb(0, 37, 85);
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 70px;
  padding-bottom: 70px;
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

`


export {TopPart}