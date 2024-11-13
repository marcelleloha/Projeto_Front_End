
// function ConteudoProjeto(props) {
//   return (
//     <>
    
//       <ContainerFiltros>
//           <div className='filtro'>
//             <p>
//               {props.tecnologias}
//             </p>
//           </div>
//           <div className='filtro'>
//             <p>
//               {props.unidade}
//             </p>
//           </div>
//           <div className='filtro'>
//             <p>
//               {props.data}
//             </p>
//           </div>
//           <div className='filtro'>
//             <p>
//               {props.periodo}
//             </p>
//           </div>
//       </ContainerFiltros>
//       <ContainerDescricao>
//         <div className='titulo'>
//           <h2>Descrição</h2>
//         </div>
//         <div className='corpo'>
//           <p className='paragrafo'>{props.paragrafo}</p>
//           <img src={props.imagem} className='imagem'></img>
//         </div>
//       </ContainerDescricao>
//       <ContainerDeTec>
//         <div id='tec1'>
//           <p>{props.titulotec}</p>
//           <img src={props.imgtec}/>
//           <p>{props.textotec}</p>
        
//         </div>
//         <div id='tec2'>
//           <p>{props.titulotec2}</p>
//           <img src={props.imgtec2}/>
//           <p>{props.textotec2}</p>
        
//         </div>
//       </ContainerDeTec>
//       <Integrantes>
//         <h3>Integrantes:</h3>
//         <ul>
//           {integrantes && integrantes.map((integrante, index) => (
//             <li key={index}>{integrante}</li>
//           ))}
//         </ul>
//       </Integrantes>
//     </>
//   );
// } 

// export default ConteudoProjeto;

import React from 'react';
import { ContainerFiltros, ContainerDescricao, ContainerDeTec, Integrantes } from './Style';

function ConteudoProjeto({
  tecnologias,
  unidade,
  data,
  periodo,
  paragrafo,
  imagem,
  titulotec,
  imgtec,
  textotec,
  titulotec2,
  imgtec2,
  textotec2,
  integrantes,
  professores 
}) {
  return (
    <>
      <ContainerFiltros>
        <div className="filtro">
          <p>{tecnologias}</p>
        </div>
        <div className="filtro">
          <p>{unidade}</p>
        </div>
        <div className="filtro">
          <p>{data}</p>
        </div>
        <div className="filtro">
          <p>{periodo}</p>
        </div>
      </ContainerFiltros>

      <ContainerDescricao>
        <div className="titulo">
          <h2>Descrição</h2>
        </div>
        <div className="corpo">
          <p className="paragrafo">{paragrafo}</p>
          <img src={imagem} className="imagem" alt="Descrição do projeto" />
        </div>
      </ContainerDescricao>

      <ContainerDeTec>
        <div id="tec1">
          <p>{titulotec}</p>
          <img src={imgtec} alt={titulotec} />
          <p>{textotec}</p>
        </div>
        <div id="tec2">
          <p>{titulotec2}</p>
          <img src={imgtec2} alt={titulotec2} />
          <p>{textotec2}</p>
        </div>
      </ContainerDeTec>

      <Integrantes>
        <h3>Integrantes:</h3>
        <div id='integrantes'>
          {integrantes && integrantes.map((integrante, index) => (
            <div key={index} id='integrante'>
              <p id='dados1'>{integrante.nome}</p>
              <p id='dados2'>{integrante.email}</p>
              <p id='dados2'>{integrante.curso}</p>
            </div>
          ))}
        </div>
        <h3>Professores</h3>
        <div id='integrantes'>
          {professores && professores.map((integrante, index) => (
            <div key={index} id='integrante'>
              <p id='dados1'>{integrante.nome}</p>
              <p id='dados2'>{integrante.email}</p>
              <p id='dados2'>{integrante.curso}</p>
            </div>
          ))}
        </div>
      </Integrantes>
    </>
  );
}

export default ConteudoProjeto;
