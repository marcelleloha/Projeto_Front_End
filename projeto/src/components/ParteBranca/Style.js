import styled from "styled-components"

const TopPart = styled.header `

  @media (min-width: 1000px){
    background-color: #F5F5F5;
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
    background-color: #F5F5F5;
    border: 2px solid #F5AC00
  }

  #conteudo-azul{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  #imagemProjeto{
    width: 50%;
    height: 50%;
  }
  #parteAzul{
    background-color: #002555;
  }
  } 

  @media (max-width: 400px){
    background-color: #F5F5F5;
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
    font-size: 21px;
    width:100%;
    max-width: 100%;
    height: auto;

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
    width:100%;
    max-width: 100%;
    height: auto;

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
    background-color: #F5F5F5;
    border: 2px solid #F5AC00
  }

  #conteudo-azul{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  #imagemProjeto{
    width: 50%;
    height: 50%;
  }
  #parteAzul{
    background-color: #002555;
  }
  }
  
`
const Azul = styled.header `
  @media (min-width:1000px){
    padding-left: 100px;
  padding-right: 100px;
  padding-top: 70px;
  padding-bottom: 70px;
  background-color: #002555;
  color: white;

  #titulo {
    font-size: 54px;
    font-weight: bold;
    padding-bottom: 20px;
  }

  #conteudo-azul{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 30px;
  }

  #imagemProjeto{
    width: 45%;
    height: 45%;
  }
  #parteAzul{
    background-color: #002555;
  }
  }
  
`
const Terceiro = styled.header `

@media (max-width:1000px) {
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 70px;
  padding-bottom: 90px;
  background-color: #F5F5F5;
  color: black;

}
`


export {TopPart, Azul, Terceiro}