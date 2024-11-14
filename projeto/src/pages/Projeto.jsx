import React from 'react';
import { useParams } from 'react-router-dom';
import dados from '../data/projects.json';
import ConteudoProjeto from '../components/ConteudoProjeto/ConteudoProjeto';
import Base from "./Base";
import ParteAzul from '../components/ParteAzul/ParteAzul';
import { Integrantes } from '../components/ConteudoProjeto/Style';

function ProjetoDetalhes() {
  const { id } = useParams()
  const projeto = dados.find(el => el.id === parseInt(id))

  if (!projeto) {''
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
        titulotec={projeto.Tec1}
        imgtec={projeto.Tecimg1}
        textotec={projeto.Tecdec1}
        titulotec2={projeto.Tec2}
        imgtec2={projeto.Tecimg2}
        textotec2={projeto.Tecdec2}
        integrantes={projeto.integrantes}
        professores={projeto.professores}
      /> 
      

    </Base>
  );
}

export default ProjetoDetalhes;
