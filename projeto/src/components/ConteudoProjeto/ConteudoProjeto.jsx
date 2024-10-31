import React from 'react';
import { ContainerFiltros, ContainerDescricao } from './Style';


function ConteudoProjeto(props) {
  return (
    <>
    
      <ContainerFiltros>
          <div className='filtro'>
            <p>
              {props.tecnologias}
            </p>
          </div>
          <div className='filtro'>
            <p>
              {props.unidade}
            </p>
          </div>
          <div className='filtro'>
            <p>
              {props.data}
            </p>
          </div>
          <div className='filtro'>
            <p>
              {props.periodo}
            </p>
          </div>
      </ContainerFiltros>
      <ContainerDescricao>
        <div className='titulo'>
          <h2>Descrição</h2>
        </div>
        <div className='corpo'>
          <p className='paragrafo'>{props.paragrafo}</p>
          <img src={props.imagem} className='imagem'></img>
        </div>
      </ContainerDescricao>
    </>
  );
} 

export default ConteudoProjeto;


