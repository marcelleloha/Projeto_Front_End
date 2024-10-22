import React from 'react';
import { useParams } from 'react-router-dom';
import dados from '../data/projects.json';
import ConteudoProjeto from '../components/ConteudoProjeto/ConteudoProjeto';

function ProjetoDetalhes() {
  const { id } = useParams()
  const projeto = dados.find(el => el.id === parseInt(id))

  if (!projeto) {
    return <p>Projeto não encontrado!</p>
  }

  return (
    <div>
      <ConteudoProjeto 
        titulo={projeto.titulo}
        imagem={projeto.imagem}
        texto={projeto.texto}
      />
    </div>
  );
}

export default ProjetoDetalhes;
