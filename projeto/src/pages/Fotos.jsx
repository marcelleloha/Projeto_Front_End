import { useEffect, useState } from "react";
import FotoCard from "../components/FotoCard/FotoCard";
import ListContainer from "../components/ListContainer/ListContainer";
import brutos from "../data/computadores.json";
import Protegida from "./Protegida";

const Fotos = () => {
  const [dados, setDados] = useState(brutos); // dados iniciais são os dados
  const filtra = (entrada) => {
    setDados(brutos.filter((elemento) => elemento.nome.includes(entrada)))
    
  }

 
  return (
    <>
    
    <input placeholder="filter" onChange={(e) => filtra(e.target.value)}></input>
    <ListContainer>
      {dados.map(
        (el, index) => (
          <FotoCard 
            key={index}
            titulo={el.nome}
            src={`${process.env.PUBLIC_URL}${el.url}`}
            link_original={el.link_original}
            agradecimento={el.agradecimento}
          />
          )
      )}
      </ListContainer>

    </>
 )
};

export default Fotos;