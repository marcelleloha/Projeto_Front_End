import React from 'react'
import { Container } from './Style'

function Cartao(props) {
  return (
    <Container>
        <div id='divPrincipal'>
            <h3 id='titulo'>{props.titulo}</h3>
            <img src={props.imagem} id='teste'></img>
            <p id='texto'>{props.texto}</p>
        
        </div>
    </Container>
  )
}

export default Cartao