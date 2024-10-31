import React, { useState, useEffect } from 'react';
import Cartao from '../Cartao/Cartao';
import { Div, Container2 } from './Style';
import { Link, useParams } from "react-router-dom";
import dadosOriginais from '../../data/projects.json'; // renomeado para `dadosOriginais`
import { FaSearch } from 'react-icons/fa';

function GrupoCartoes() {
  const { id } = useParams();
  const [dados, setDados] = useState(dadosOriginais); // dados iniciais são os dados do JSON
  const [dadosFiltrados, setDadosFiltrados] = useState(dados);

  // Função de pesquisa
  const filtra = (entrada) => {
    const dadosFiltradosPorNome = dadosOriginais.filter((elemento) =>
      elemento.titulo.toLowerCase().includes(entrada.toLowerCase()) || elemento.unidade.toLowerCase().includes(entrada.toLowerCase())
    );
    setDados(dadosFiltradosPorNome); // Atualiza `dados` com os filtrados por nome
  };

  // Filtra `dados` pelo `id` quando ele estiver presente
  useEffect(() => {
    if (id) {
      setDadosFiltrados(dados.filter((elemento) => elemento.id === parseInt(id)));
    } else {
      setDadosFiltrados(dados); // Exibe todos os `dados` se o id não existir
    }
  }, [id, dados]);

  return (
    <>
      <Container2>
        <div id="parteBaixo">
          <h1>Projetos</h1>
          <div id="inputWraper">
            <FaSearch id="iconeDePesquisa" />
            <input
              placeholder="Pesquise Aqui"
              onChange={(e) => filtra(e.target.value)}
            />
          </div>
        </div>
      </Container2>
      <Div>
        {dadosFiltrados.map((item, index) => (
          <Link to={`/projeto/${item.id}`} key={item.id} id="no-underline">
            <Cartao
              tituloCima={item.titulo}
              texto={item.texto}
              imagem={item.imagem}
              textoBaixoTec={item.tecnologias}
              textoBaixoUn={item.unidade}
              textoBaixoPe={item.periodo}
            />
          </Link>
        ))}
      </Div>
    </>
  );
}

export default GrupoCartoes;
