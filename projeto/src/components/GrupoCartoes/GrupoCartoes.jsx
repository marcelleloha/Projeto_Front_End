import React from 'react';
import Cartao from '../Cartao/Cartao';
import { Div } from './Style'
import { Link } from "react-router-dom";
import dados from '../../data/projects.json';
import { useParams } from 'react-router-dom';

function GrupoCartoes() {

  const { id } = useParams();

  let dadosFiltrados;
  
  if (id) {
    dadosFiltrados = dados.filter((elemento) => elemento.id === parseInt(id));
  } else {
    dadosFiltrados = dados;
  }
      
  return (
    <Div>

          
        {dadosFiltrados.map((item, index) => (
            <Link to={`/projeto/${item.id}`} id='no-underline'>
              <Cartao key={index} tituloCima={item.titulo} texto={item.texto} imagem={item.imagem} textoBaixoTec={item.tecnologias} textoBaixoUn={item.unidade} textoBaixoPe={item.periodo}/>
            </Link> 
        ))}
    
    </Div>
  )
}

export default GrupoCartoes
