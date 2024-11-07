import { useEffect, useState } from "react";
import Base from "./Base";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/Firebase";
import ParteAzul from "../components/ParteAzul/ParteAzul";
import Cartao from "../components/Cartao/Cartao";
import GrupoCartoes from "../components/GrupoCartoes/GrupoCartoes";
import HamburgerMenu from "../components/menuSanduiche/menuSanduiche";

const Home = () => {


  return (
    <Base>
      <ParteAzul
        name="Portfólio de Projetos"
        texto="Navegue pelos projetos ligados a instituição IBMEC"
        imagem='imagens/heroimage.png'
      />
      <div id="test-redirect">
        <GrupoCartoes/>
      </div>
    </Base>
  );
};

export default Home;
