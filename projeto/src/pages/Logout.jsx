import { signOut } from "firebase/auth"
import { auth } from "../config/Firebase";
import Base from "./Base";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = (e) =>{
    e.preventDefault();
    signOut(auth);
    window.sessionStorage.removeItem("accessToken");
    navigate("/");
  }

  return (
    <Base>
      <h1>Logout</h1>
      <button onClick={handleLogout}>Logout</button>
    </Base>
  )
}


export default Logout;