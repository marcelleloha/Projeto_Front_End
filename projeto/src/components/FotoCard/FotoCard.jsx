import { FotoArticle } from "./Style"

const FotoCard = (props) => {

  return(
  <FotoArticle onClick={()=>{window.location = props.src}}>
    <h3>{props.titulo}</h3>
    <figure>
      <img src={props.src} />
      <figcaption dangerouslySetInnerHTML={{__html:props.agradecimento}}/>
    </figure>
    
  </FotoArticle>
  )
}

export default FotoCard;