import styled from "styled-components"

const TopPart = styled.header `
  background-color: rgb(255, 255, 255);
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
    color: black;
  }
  #Hero{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  img {
    height: 700px
  }
  #HeroEsquerda {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  button{
    border-radius: 20px;
    padding: 10px
  }
  #botoes{
    display: flex;
    flex-direction: row;
    justify-content: start;
    gap: 40px;
  }
  #botao1{
    background-color: #F5AC00;
    border: 0
  }
  #botao2{
    background-color: white;
    border: 2px solid #F5AC00
  }
`


export {TopPart}