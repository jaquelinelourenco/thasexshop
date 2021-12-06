import React, {useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom'
/*Importando imagens */
import logo from '../assets/sex-shop-set-logos.jpg'
import { Content, Wrapper } from "./style";

export const LoginPage = () => {
  const [username, setUsername] = useState("")
  const user = localStorage.getItem('@thasexshop/token')
  const navigate = useNavigate()

  useEffect(() => {
    if(user) {
      navigate("/");
    }
  },[user])

  const goToHome = () => {
    localStorage.setItem("@thasexshop/token", username)
    navigate("/home")
  }

  return (
    <Wrapper>
      <Content>
      <h1>Loja Tha SexShop</h1>
        <img src={logo}/>
        <form>
          <input
            type='text'
            name='nome'
            value={username}
            placeholder="Insira seu nome"
            onChange={(e)=>setUsername(e.target.value)}
          />
          <button onClick={goToHome}>Entrar</button>
        </form>
      </Content>
    </Wrapper>
  );
}