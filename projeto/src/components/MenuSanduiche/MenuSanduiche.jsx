import React, { useState } from "react";
import Styles from "./Style";
import { Link } from "react-router-dom";


const MenuSanduiche = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Styles>
    
        <div className="hamburger-menu">
        <button className="menu-icon" onClick={toggleMenu}>
            {/* Ícone de sanduíche */}
            <div className={`bar ${isOpen ? "open" : ""}`} />
            <div className={`bar ${isOpen ? "open" : ""}`} />
            <div className={`bar ${isOpen ? "open" : ""}`} />
        </button>

        {/* Menu */}
        <nav className={`menu ${isOpen ? "show" : ""}`} id='teste'>
            <Link to="/" className="link">Home</Link>
            <Link to="/" className="link">Projetos</Link>
            <Link to="/sobrenos" className="link">Sobre o Projeto</Link>
        </nav>
        </div>
    </Styles>
  );
};

export default MenuSanduiche;
