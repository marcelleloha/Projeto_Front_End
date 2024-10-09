import { Card } from "./Style";

const AtletaCard = (props) => (
  <Card>
    <div className="nome">{props.nome}</div>
    <figure>
      <img src={props.src}/>
    </figure>
  </Card>
)

export default AtletaCard;