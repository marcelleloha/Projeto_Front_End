import Header from "../components/Header/Header";

const Base = (props) => (
  <>
    <Header />
    <div className="container">
      {props.children}
    </div>
  </>
)

export default Base;