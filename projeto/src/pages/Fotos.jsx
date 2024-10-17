import FotoCard from "../components/FotoCard/FotoCard";
import ListContainer from "../components/ListContainer/ListContainer";
import dados from "../data/computadores.json";
import Protegida from "./Protegida";

const Fotos = () => {
 
  return (
      <Protegida>
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
      </Protegida>      
 )
};

export default Fotos;