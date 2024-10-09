import { useEffect, useState } from "react";
import Base from "./Base"
import { getAll, getElenco } from "../services/AtletasBotafogo";
import AtletaCard from "../components/AtletaCard/AtletaCard";
import ListContainer from "../components/ListContainer/ListContainer";

const Atletas = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);
  
  useEffect(() => {
    const getDados = async () => {
      const dados = await getElenco();
      
      if (dados.code === 400) {
        setErro(dados);
      } else {
        setData(dados);
      }

      setLoading(false);
    } 
    getDados();
  },[]);


  return (
    <Base>
      <ListContainer>
      {loading &&  <span>Carregando...</span>}
      {erro && 
        <div style={{textAlign: 'center'}}>
          <span>{`${erro.message}`}</span><br/>
          <span>{`Mensagem Original: ${erro.original}`}</span>
        </div>
      }

      {data && data.map( (ele, index) => (
              <AtletaCard
                key={index}
                nome={ele.nome}
                src={ele.imagem}
              />
          ))
        
      }
      </ListContainer>
    </Base>
  )
}

export default Atletas;