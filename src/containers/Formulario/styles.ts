import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const MainContainer = styled.div`
  max-width: 700px;
  width: 100%;
  margin: 0 auto;

  h2 {
    margin-top: 40px;
    margin-bottom: 16px;
    font-size: 32px;
    font-weight: bold;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const Inputs = styled.input`
  width: 558px;
  height: 58px;
  margin-bottom: 16px;
  border: none;
  box-shadow: 0 1px rgba(0, 0, 0, 0.2);
  font-size: 16px;
  padding: 12px 8px 12px 24px;
`
export const Opcoes = styled.div`
  margin-bottom: 16px;
  p {
    margin-bottom: 8px;
  }

  label {
    margin-right: 8px;
  }
`

export const Botoes = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: center;

  input {
    margin-right: 16px;
    height: 40px;
    width: 250px;
    font-size: 16px;
    font-weight: bold;
    border: none;
    box-shadow: -6px 6px 10px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
`
export const BotaoCadastrar = styled.input`
  background-color: #57c278;
`
export const BotaoVoltar = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #82cffa;
  height: 40px;
  width: 250px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  box-shadow: -6px 6px 10px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  text-decoration: none;
  color: black;
`
