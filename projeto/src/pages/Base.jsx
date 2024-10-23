import Footerr from "../components/Footerr/Footerr";
import Header from "../components/Header/Header";

const Base = (props) => (
  <>
    <Header />
    <div className="container">
      {props.children}
    </div>
    <Footerr/>
  </>
)

export default Base;