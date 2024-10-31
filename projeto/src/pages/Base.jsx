import Footerr from "../components/Footerr/Footerr";
import Header from "../components/Header/Header";

const Base = (props) => (
  <>
   <div style={{ backgroundColor: '#f5f5f5' }}>
    <Header />
    <div className="container">
      {props.children}
    </div>
    <Footerr/>
   
   </div>
  </>
)

export default Base;