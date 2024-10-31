import React from 'react';
import { useParams } from 'react-router-dom';
import dados from '../data/projects.json';
import ConteudoProjeto from '../components/ConteudoProjeto/ConteudoProjeto';
import Base from "./Base";
import ParteAzul from '../components/ParteAzul/ParteAzul';

function ProjetoDetalhes() {
  const { id } = useParams()
  const projeto = dados.find(el => el.id === parseInt(id))

  if (!projeto) {
    return <p>Projeto não encontrado!</p>
  }

  return (
    <Base>
      <ParteAzul name={projeto.titulo} texto={projeto.dec} imagem={projeto.imagem}/>

      <ConteudoProjeto 
        titulo={projeto.titulo}
        imagem={projeto.imagem}
        texto={projeto.texto}
        tecnologias={projeto.tecnologias}
        unidade={projeto.unidade}
        periodo={projeto.periodo}
        data={projeto.data}
        paragrafo={projeto.paragrafo}
      /> 

    </Base>
  );
}

export default ProjetoDetalhes;
