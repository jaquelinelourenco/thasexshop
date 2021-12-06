import styled from "styled-components";
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
  background: black;
  h1{
    color: #ab0243;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  img{
    height:200px;
    width:250px;
    border-radius: 100px
    margin-top: 0px;
  }
  form {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    input {
      height: 20px;
      border-radius: 4px;
      padding: 10px;
      border: 1px solid #1f1f1f;
      background: #fff;
    }
    button {
      margin-top: 10px;
      height: 48px;
      border-radius: 5px;
      background: #f50a0a;
      border: none;
      color: black;
      text-transform: uppercase;
      font-size: 18px;
      font-weight: bold;
      &:hover {
        background: ${darken(0.08, "#ab0202")};
        cursor: pointer;
      }
    }
  }
`;