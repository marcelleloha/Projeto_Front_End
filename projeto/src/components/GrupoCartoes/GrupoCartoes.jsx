import React from 'react';
import Cartao from '../Cartao/Cartao';
import { Div } from './Style'

function GrupoCartoes() {
    const listaDeCartoes = [
        { titulo: "Projeto 1", texto: "Descrição do Projeto 1" },
        { titulo: "Projeto 2", texto: "Descrição do Projeto 2" },
        { titulo: "Projeto 3", texto: "Descrição do Projeto 3" },
        { titulo: "Projeto 4", texto: "Descrição do Projeto 4" },
        { titulo: "Projeto 5", texto: "Descrição do Projeto 5" },
        { titulo: "Projeto 6", texto: "Descrição do Projeto 6" },
        { titulo: "Projeto 7", texto: "Descrição do Projeto 7" },
        { titulo: "Projeto 8", texto: "Descrição do Projeto 8" },
        { titulo: "Projeto 9", texto: "Descrição do Projeto 9" },
        { titulo: "Projeto 10", texto: "Descrição do Projeto 10" },
        { titulo: "Projeto 11", texto: "Descrição do Projeto 11" },
        { titulo: "Projeto 12", texto: "Descrição do Projeto 12" },
        { titulo: "Projeto 13", texto: "Descrição do Projeto 13" },
        { titulo: "Projeto 14", texto: "Descrição do Projeto 14" },
        { titulo: "Projeto 15", texto: "Descrição do Projeto 15" },
        { titulo: "Projeto 16", texto: "Descrição do Projeto 16" },
        { titulo: "Projeto 17", texto: "Descrição do Projeto 17" },
        { titulo: "Projeto 18", texto: "Descrição do Projeto 18" },
        { titulo: "Projeto 19", texto: "Descrição do Projeto 19" },
        { titulo: "Projeto 20", texto: "Descrição do Projeto 20" },
      ];
      
  return (
    <Div>
        
        {listaDeCartoes.map((item, index) => (
            <Cartao key={index} titulo={item.titulo} texto={item.texto} />
        ))}
    
    </Div>
  )
}

export default GrupoCartoes