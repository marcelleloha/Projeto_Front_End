import { Link } from "react-router-dom";
import { TopPart, Azul, Terceiro } from "./Style";

const ParteBranca = (props) => (
  <>
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
          <button id='botao1' onClick={() => document.getElementById('imagemTime').scrollIntoView({ behavior: 'smooth' })}>
            Conheça o Time
          </button>
        
          
          <button id='botao2' onClick={() => document.getElementById('conteudo-azul').scrollIntoView({ behavior: 'smooth' })}>
            Conheça o Projeto
          </button>

        </div>
      
      </div>
      <div id='HeroDireita'>
        <img src="imagens/iphone.png"></img>
      </div>
    
    </div>
    </TopPart>
    <Azul>
      <div id="titulo">
        <p>Sobre o Projeto</p>
      </div>
      <div id="conteudo-azul">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
        <img src="imagens/projetoImage.png" id="imagemProjeto"></img>
      </div>
    </Azul>
    <Terceiro>
      <img src="imagens/grupo.png" id="imagemTime"></img>
    </Terceiro>
    </>
)

export default ParteBranca;