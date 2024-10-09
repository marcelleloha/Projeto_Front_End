import { onAuthStateChanged } from "firebase/auth"
import Base from "./Base"
import { auth } from "../config/Firebase";
import { useEffect } from "react";
import Ayrton from "../components/Ayrton/Ayrton";
import ParteAzul from "../components/ParteAzul/ParteAzul";
import Cards from "../components/Cards/Cards";



const Home = () => {

  /* useEffect(()=> {
    onAuthStateChanged(auth, (user)=> {
      if (user) {
        window.sessionStorage.setItem("accessToken", user.accessToken);
      } else {
        window.sessionStorage.removeItem("accessToken");
      }
    })
  },[]) */
  

  return (
    <Base>
      <ParteAzul>
      </ParteAzul>
      <Cards></Cards>
    </Base>

  )
}

export default Home