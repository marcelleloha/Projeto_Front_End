import React, { useState, useEffect } from 'react';
import Cartao from '../Cartao/Cartao';
import { Div, Container2, Container } from './Style';
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
  // Adicione outras datas conforme necessário
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
  
  // Estados para os seletores
  const [tecnologia, setTecnologia] = useState(null);
  const [unidade, setUnidade] = useState(null);
  const [data, setData] = useState(null);
  const [periodo, setPeriodo] = useState(null);
  

  // Atualiza `searchParams` e os estados dos seletores
  const handleSelectChange = (option, setValue, key) => {
    setValue(option); // Salva o objeto inteiro no estado
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
  

  // Aplica os filtros usando `searchParams`
  useEffect(() => {
    const filtroTecnologia = searchParams.get("tecnologia") || "";
    const filtroUnidade = searchParams.get("unidade") || "";
    const filtroData = searchParams.get("data") || "";
    const filtroPeriodo = searchParams.get("periodo") || "";

    const resultadoFiltrado = dadosOriginais.filter((elemento) => {
      return (
        (filtroTecnologia ? elemento.tecnologias.includes(filtroTecnologia) : true) &&
        (filtroUnidade ? elemento.unidade.includes(filtroUnidade) : true) &&
        (filtroData ? elemento.data.includes(filtroData) : true) &&
        (filtroPeriodo ? elemento.periodo.includes(filtroPeriodo) : true)
      );
    });

    setDados(resultadoFiltrado);
  }, [searchParams]);

  // Função de pesquisa
  const filtra = (entrada) => {
    const dadosFiltradosPorNome = dadosOriginais.filter((elemento) =>
      elemento.titulo.toLowerCase().includes(entrada.toLowerCase()) || elemento.unidade.toLowerCase().includes(entrada.toLowerCase()) || elemento.periodo.toLowerCase().includes(entrada.toLowerCase())
    );
    setDados(dadosFiltradosPorNome);
  };

  // Filtra `dados` pelo `id` quando ele estiver presente
  useEffect(() => {
    if (id) {
      setDados((prevDados) => prevDados.filter((elemento) => elemento.id === parseInt(id)));
    } else {
      setDados(dadosOriginais);
    }
  }, [id]);

  // Função para limpar filtros
  const limparFiltros = () => {
    setSearchParams({}); // Limpa todos os parâmetros de busca
    setDados(dadosOriginais); // Restaura todos os dados
    setTecnologia(null); // Reseta o estado do filtro de tecnologia
    setUnidade(null); // Reseta o estado do filtro de unidade
    setData(null); // Reseta o estado do filtro de data
    setPeriodo(null); // Reseta o estado do filtro de período
  };

  return (
    <>
      <Container>
          <Select
          options={options1}
          placeholder="Tecnologia"
          id="select"
          value={tecnologia} // Agora usa o objeto completo
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
        {dados.map((item) => (
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
