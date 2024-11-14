import { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
// import { auth } from "../config/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import Base from "./Base";
import { Container } from "./PagesStyles/Style";
import Header from "../components/Header/Header";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // const handleLogin = async (event) => {
  //   event.preventDefault();
  //   try {
  //     await signInWithEmailAndPassword(auth, email, password);
  //     navigate('/');
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // };

  return (
    <>
      <Header/>
      <Container>

        <form onSubmit={handleLogin}>
          <p>ADM</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button type="submit">Login</button>
        </form>
        </Container>
    </>
  )
}

export default Login;