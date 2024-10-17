import React from 'react';
import Cartao from '../Cartao/Cartao';
import { Div } from './Style'

function GrupoCartoes() {
    const listaDeCartoes = [
        { titulo: "Projeto 1", texto: "Descrição do Projeto 1", imagem: 'imagens/projeto1.png' },
        { titulo: "Projeto 2", texto: "Descrição do Projeto 2", imagem: 'imagens/projeto1.png' },
        { titulo: "Projeto 3", texto: "Descrição do Projeto 3", imagem: 'imagens/projeto1.png' },
        { titulo: "Projeto 4", texto: "Descrição do Projeto 4", imagem: 'imagens/projeto1.png' },
        { titulo: "Projeto 5", texto: "Descrição do Projeto 5", imagem: 'imagens/projeto1.png' },
        { titulo: "Projeto 6", texto: "Descrição do Projeto 6", imagem: 'imagens/projeto1.png' },
        { titulo: "Projeto 7", texto: "Descrição do Projeto 7", imagem: 'imagens/projeto1.png' },
        { titulo: "Projeto 8", texto: "Descrição do Projeto 8", imagem: 'imagens/projeto1.png' },
        { titulo: "Projeto 9", texto: "Descrição do Projeto 9", imagem: 'imagens/projeto1.png' },
        { titulo: "Projeto 10", texto: "Descrição do Projeto 10", imagem: 'imagens/projeto1.png' },
        { titulo: "Projeto 11", texto: "Descrição do Projeto 11", imagem: 'imagens/projeto1.png' },
        { titulo: "Projeto 12", texto: "Descrição do Projeto 12", imagem: 'imagens/projeto1.png' },
        { titulo: "Projeto 13", texto: "Descrição do Projeto 13", imagem: 'imagens/projeto1.png' },
        { titulo: "Projeto 14", texto: "Descrição do Projeto 14", imagem: 'imagens/projeto1.png' },
        { titulo: "Projeto 15", texto: "Descrição do Projeto 15", imagem: 'imagens/projeto1.png' },
        { titulo: "Projeto 16", texto: "Descrição do Projeto 16", imagem: 'imagens/projeto1.png' },
        { titulo: "Projeto 17", texto: "Descrição do Projeto 17", imagem: 'imagens/projeto1.png' },
        { titulo: "Projeto 18", texto: "Descrição do Projeto 18", imagem: 'imagens/projeto1.png' },
        { titulo: "Projeto 19", texto: "Descrição do Projeto 19", imagem: 'imagens/projeto1.png' },
        { titulo: "Projeto 20", texto: "Descrição do Projeto 20", imagem: 'imagens/projeto1.png' },
      ];
      
  return (
    <Div>
        
        {listaDeCartoes.map((item, index) => (
            <Cartao key={index} titulo={item.titulo} texto={item.texto} imagem={item.imagem}/>
        ))}
    
    </Div>
  )
}

export default GrupoCartoes