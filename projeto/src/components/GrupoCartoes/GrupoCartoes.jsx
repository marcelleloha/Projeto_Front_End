import React, { useState, useEffect } from 'react';
import Cartao from '../Cartao/Cartao';
import { Div, Container2, Container, Container3 } from './Style';
import { Link, useParams, useSearchParams } from "react-router-dom";
import dadosOriginais from '../../data/projects.json';
import { FaSearch } from 'react-icons/fa';
import Select from 'react-select';

const options1 = [
  { value: 'React', label: 'React' },
  { value: 'Node', label: 'Node' },
  { value: 'TailwindCss', label: 'TailwindCss' },
  { value: 'Mongoose', label: 'Mongoose' },
];
const options2 = [
  { value: 'Rio-Barra', label: 'Rio-Barra' },
  { value: 'Rio-Centro', label: 'Rio-Centro' },
  { value: 'Belo Horizonte', label: 'Belo Horizonte' },
  { value: 'São Paulo', label: 'São Paulo' },
  { value: 'Brasilia', label: 'Brasilia' },
];
const options3 = [
  { value: '24/09/2024', label: '24/09/2024' },
];
const options4 = [
  { value: '2022.1', label: '2022.1' },
  { value: '2022.2', label: '2022.2' },
  { value: '2023.1', label: '2023.1' },
  { value: '2023.2', label: '2023.2' },
  { value: '2024.1', label: '2024.1' },
  { value: '2024.2', label: '2024.2' },
];

function GrupoCartoes() {
  const { id } = useParams();
  const [dados, setDados] = useState(dadosOriginais);
  const [searchParams, setSearchParams] = useSearchParams();
  
  const [tecnologia, setTecnologia] = useState(null);
  const [unidade, setUnidade] = useState(null);
  const [data, setData] = useState(null);
  const [periodo, setPeriodo] = useState(null);

  
  const [paginaAtual, setPaginaAtual] = useState(1);
  const cardsPorPagina = 10;

  const indiceUltimoCard = paginaAtual * cardsPorPagina;
  const indicePrimeiroCard = indiceUltimoCard - cardsPorPagina;
  const dadosPaginaAtual = dados.slice(indicePrimeiroCard, indiceUltimoCard);

  const numeroTotalPaginas = Math.ceil(dados.length / cardsPorPagina);

  const irParaPagina = (numero) => {
    setPaginaAtual(numero);
  };

  const handleSelectChange = (option, setValue, key) => {
    setValue(option);
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      if (option) {
        newParams.set(key, option.value);
      } else {
        newParams.delete(key);
      }
      return newParams;
    });
  };

  useEffect(() => {
    const filtroTecnologia = searchParams.get("tecnologia") || "";
    const filtroUnidade = searchParams.get("unidade") || "";
    const filtroData = searchParams.get("data") || "";
    const filtroPeriodo = searchParams.get("periodo") || "";
    const filtroNome = searchParams.get("nome") || "";

    const resultadoFiltrado = dadosOriginais.filter((elemento) => {

      const matchNomeIntegrante = Array.isArray(elemento.integrantes) &&
      elemento.integrantes.some((integrante) =>
        integrante.includes(filtroNome)
      );

      return (
        (filtroTecnologia ? elemento.tecnologias.includes(filtroTecnologia) : true) &&
        (filtroUnidade ? elemento.unidade.includes(filtroUnidade) : true) &&
        (filtroData ? elemento.data.includes(filtroData) : true) &&
        (filtroPeriodo ? elemento.periodo.includes(filtroPeriodo) : true) &&
        (filtroNome ? matchNomeIntegrante : true)


      );
    });

    setDados(resultadoFiltrado);
    setPaginaAtual(1);
  }, [searchParams]);

  const filtra = (entrada) => {
    const dadosFiltradosPorNome = dadosOriginais.filter((elemento) =>
      elemento.titulo.toLowerCase().includes(entrada.toLowerCase()) || elemento.unidade.toLowerCase().includes(entrada.toLowerCase()) || elemento.periodo.toLowerCase().includes(entrada.toLowerCase()) || elemento.tecnologias.toLowerCase().includes(entrada.toLowerCase())
    );
    setDados(dadosFiltradosPorNome);
    setPaginaAtual(1);
  };

  useEffect(() => {
    if (id) {
      setDados((prevDados) => prevDados.filter((elemento) => elemento.id === parseInt(id)));
    } else {
      setDados(dadosOriginais);
    }
  }, [id]);

  const limparFiltros = () => {
    setSearchParams({});
    setDados(dadosOriginais);
    setTecnologia(null);
    setUnidade(null);
    setData(null);
    setPeriodo(null);
    setPaginaAtual(1);
  };

  return (
    <>
      <Container>
        <Select
          options={options1}
          placeholder="Tecnologia"
          id="select"
          value={tecnologia}
          onChange={(option) => handleSelectChange(option, setTecnologia, "tecnologia")}
        />
        <Select
          options={options2}
          placeholder="Unidade"
          id="select"
          value={unidade}
          onChange={(option) => handleSelectChange(option, setUnidade, "unidade")}
        />
        <Select
          options={options3}
          placeholder="Data"
          id="select"
          value={data}
          onChange={(option) => handleSelectChange(option, setData, "data")}
        />
        <Select
          options={options4}
          placeholder="Período"
          id="select"
          value={periodo}
          onChange={(option) => handleSelectChange(option, setPeriodo, "periodo")}
        />
        <button onClick={limparFiltros} className="limpar-filtros">Limpar Filtros</button>
      </Container>
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
        {dadosPaginaAtual.map((item) => (
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
      {/* Controles de Paginação */}
      <Container3>
      
        <div className="paginacao">
          {Array.from({ length: numeroTotalPaginas }, (_, index) => (
            <button
              key={index}
              onClick={() => irParaPagina(index + 1)}
              className={paginaAtual === index + 1 ? 'ativo' : ''}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </Container3>
    </>
  );
}

export default GrupoCartoes;
