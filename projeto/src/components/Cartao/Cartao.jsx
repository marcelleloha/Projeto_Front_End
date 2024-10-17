import React from 'react'
import { Container } from './Style'
import { Link } from "react-router-dom";

function Cartao(props) {
  return (
    <Container>
      <Link to='/projeto' id='no-underline'>
        <div id='divPrincipal'>
            <h3 id='titulo'>{props.titulo}</h3>
            <img src={props.imagem} id='teste'></img>
            <p id='texto'>{props.texto}</p>
        
        </div>
      
      </Link>
      </Container>
    )
}

export default Cartao