import { useEffect, useState } from "react";
import Base from "./Base";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/Firebase";
import ParteAzul from "../components/ParteAzul/ParteAzul";
import Cartao from "../components/Cartao/Cartao";
import GrupoCartoes from "../components/GrupoCartoes/GrupoCartoes";
import Filtros from "../components/Filtros/Filtros";

const Home = () => {


  return (
    <Base>
      <ParteAzul
        name="Projeto de Alunos"
        texto="Navegue pelos projetos realizados por alunos e professores do IBMEC."
        imagem='imagens/heroimage.png'
      />
      <Filtros/>
      <GrupoCartoes/>
      <ParteAzul/>
    </Base>
  );
};

export default Home;
