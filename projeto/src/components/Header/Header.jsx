import { Link } from "react-router-dom";
import { Top } from "./Style";

import MenuSanduiche from "../menuSanduiche/menuSanduiche";

const Header = () => (
  <Top>
    <div id="navbar">
      <div id="linkIbmec">
        <Link to="https://www.ibmec.br/">
          <img src="imagens/logo_ibmec.png" alt="Logo ibmec"/>
        </Link>
      </div>
      <div id="navegacao">
        <Link to="/">Home</Link>
        <Link to="/">Projetos</Link>
        <Link to="/sobrenos">Sobre o Projeto</Link>
        
        {/*
          
          { window.sessionStorage.getItem('accessToken')
          ? <Link to="/logout">Logout</Link>
          : <Link to="/login">Login</Link>
          }
          */}
        
      
      </div>
      <div id="menu-hamburger">
          <MenuSanduiche/>
      </div>
    </div>
    <div>
      
    </div>
  </Top>
)

export default Header;