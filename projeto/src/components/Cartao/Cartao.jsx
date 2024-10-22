import React from 'react'
import { Container } from './Style'
import { Link } from "react-router-dom";
import dados from '../../data/projects.json';
import { useParams } from 'react-router-dom';

function Cartao(props) {
  return (
    
    <Container>
        <div id='divPrincipal'>
          <div className='corpo-card'>
            <div className='titulo'>
              <p className='titulo-cima'>{props.tituloCima}</p>
            
            </div>
            <img src={props.imagem} id='teste'></img>
            <p className='titulo-baixo'>Tencologias</p>
            <p className='texto-baixo'>{props.textoBaixoTec}</p>
            <p className='titulo-baixo'>Unidade</p>
            <p className='texto-baixo'>{props.textoBaixoUn}</p>
            <p className='titulo-baixo'>Período</p>
            <p className='texto-baixo'>{props.textoBaixoPe}</p>
          </div>
          <div className='class-botao'>
            <button className='botao'>Vizualizar</button>
          
          </div>
      
        </div>
      </Container>
    )
}

export default Cartao



