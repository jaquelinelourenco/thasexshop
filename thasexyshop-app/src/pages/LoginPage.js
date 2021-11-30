import React, {useState} from "react";
import {useNavigate} from 'react-router-dom'
/*Importando imagens */
import logo from '../assets/sex-shop-set-logos.jpg'
import { Content, Wrapper } from "./style";

export const LoginPage = () => {
  const [nome, setNome] = useState("")

  const navigate = useNavigate()

  const goToHome = () => {
    navigate('/home')
  }

  return (
    <Wrapper>
      <h1>Loja Tha SexShop</h1>
      <Content>
        <img src={logo}/>
        <form>
          <input
            type='text'
            name='fnome'
            value={nome}
            onChange={(e)=>setNome(e.target.value)}
          />
          <button onClick={goToHome}>Entrar</button>
        </form>
      </Content>
    </Wrapper>
  );
}