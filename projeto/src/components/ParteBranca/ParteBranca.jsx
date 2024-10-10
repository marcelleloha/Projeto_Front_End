import { Link } from "react-router-dom";
import { TopPart } from "./Style";

const ParteBranca = (props) => (
  <TopPart>
    <div id='Hero'>
      <div id='HeroEsquerda'>
        <div id="titulo">
          <p id='tituloreal'>
            {props.name}
          </p>
          <p id='texto'>
            {props.texto}
          </p>
        </div>
        <div id='botoes'>
          <button id='botao1'>
            Conheça o Time
          </button>
          <button id='botao2'>
            Conheça o Projeto
          </button>
        </div>
      
      </div>
      <div id='HeroDireita'>
        <img src="imagens/iphone.png"></img>
      </div>
    
    </div>
  </TopPart>
)

export default ParteBranca;