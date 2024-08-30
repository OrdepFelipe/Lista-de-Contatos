import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

type CardHeaderProps = {
  $categoria: string
}

function retornaCorDeFundo({ $categoria }: CardHeaderProps) {
  if ($categoria === 'familia') return variaveis.backgroundVerde
  if ($categoria === 'amigo') return variaveis.backgroundVermelho
  if ($categoria === 'trabalho') return variaveis.backgroundAzul
}

export const Card = styled.div`
  width: 350px;
  height: 350px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  text-align: center;
  background-color: #f9f9f9;
  justify-self: center;
  align-self: center;
`

export const CardHeader = styled.div<CardHeaderProps>`
  background-color: ${retornaCorDeFundo};
  padding: 20px;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    border: 5px solid white;
  }
`

export const CardBody = styled.div`
  padding: 20px;

  h3 {
    margin: 10px 0 5px;
    font-size: 18px;
    color: #4a4a4a;
  }

  p {
    margin: 0;
    font-size: 14px;
    color: #9a9a9a;
  }
`

export const BtnEditar = styled.button`
  background-color: #57c278;
  height: 40px;
  width: 150px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  box-shadow: -6px 6px 10px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  text-decoration: none;
  color: black;
  margin-right: 8px;
`

export const BtnSalvar = styled.button`
  background-color: #57c278;
  height: 40px;
  width: 150px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  box-shadow: -6px 6px 10px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  text-decoration: none;
  color: black;
  margin-right: 8px;
`

export const BtnCancelar = styled.button`
  background-color: #f16165;
  height: 40px;
  width: 150px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  box-shadow: -6px 6px 10px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  text-decoration: none;
  color: black;
`
