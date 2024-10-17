import { Link } from "react-router-dom";
import { TopPart } from "./Style";

const ParteAzul = (props) => (
  <TopPart>
    <div id="titulo">
      <p id='tituloreal'>
        {props.name}
      </p>
      <p id='texto'>
        {props.texto}
      </p>

    </div>
    <div id='imagem'>
      <img src={props.imagem}></img>
    </div>
  </TopPart>
)

export default ParteAzul;