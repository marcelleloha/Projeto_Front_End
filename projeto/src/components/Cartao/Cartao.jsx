import React from 'react'
import { Container } from './Style'
import { Link } from "react-router-dom";
import dados from '../../data/projects.json';
import { useParams } from 'react-router-dom';

function Cartao(props) {
  const { id } = useParams();

  let dadosFiltrados;
  // filter: vai percorrer os elementos que o resultado da função seja true
  // const dadosFiltrados = id ? dados.filter((elemento) => elemento.id === parseInt(id)) : dados;
  if (id) {
    dadosFiltrados = dados.filter((elemento) => elemento.id === parseInt(id));
  } else {
    dadosFiltrados = dados;
  }
  return (
    
    <Container>
      
      <Link to='/projeto' id='no-underline'>
        <div id='divPrincipal'>
            <h3 id='titulo'>{props.titulo}</h3>
            <img src={props.imagem} id='teste'></img>
            <p id='texto'>{props.texto}</p>
        
        </div>
      
      </Link>
      
        
        
          
        {/*
          
          {dadosFiltrados.map(
            (el, index) => (
              <Link to={`/projeto/${el.id}`} id='no-underline'>
                <div key={index} id='divPrincipal'>
                  <h2>{el.titulo}</h2>
                  <img src={el.imagem} alt={el.titulo} id='teste'/>
                  <p id='texto'>{el.texto}</p>
                </div>
              </Link> 
              )
          )}
          */} 
          
      </Container>
    )
}

export default Cartao