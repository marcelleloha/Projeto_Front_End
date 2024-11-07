import React from 'react';
import { ContainerFiltros, ContainerDescricao, ContainerDeTec, Integrantes } from './Style';


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
      <ContainerDeTec>
        <div id='tec1'>
          <p>{props.titulotec}</p>
          <img src={props.imgtec}/>
          <p>{props.textotec}</p>
        
        </div>
        <div id='tec2'>
          <p>{props.titulotec2}</p>
          <img src={props.imgtec2}/>
          <p>{props.textotec2}</p>
        
        </div>
      </ContainerDeTec>
      <Integrantes>
        
      </Integrantes>
    </>
  );
} 

export default ConteudoProjeto;


