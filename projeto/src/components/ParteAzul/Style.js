import styled from "styled-components"

const TopPart = styled.header `
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

`


export {TopPart}