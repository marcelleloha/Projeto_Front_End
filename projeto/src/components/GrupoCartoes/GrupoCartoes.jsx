import React from 'react';
import Cartao from '../Cartao/Cartao';
import { Div } from './Style'
import { Link } from "react-router-dom";
import dados from '../../data/projects.json';
import { useParams } from 'react-router-dom';

function GrupoCartoes() {

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
    <Div>

          
        {dadosFiltrados.map((item, index) => (
            <Link to={`/projeto/${item.id}`} id='no-underline'>
              <Cartao key={index} titulo={item.titulo} texto={item.texto} imagem={item.imagem}/>
            </Link> 
        ))}
    
    </Div>
  )
}

export default GrupoCartoes
