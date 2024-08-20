import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Props } from '../../containers/Main'

export default function retornaCorDeFundo(props: Props) {
  if ('categoria' in props) {
    if (props.categoria === 'familia') return variaveis.backgroundVerde
    if (props.categoria === 'amigo') return variaveis.backgroundVermelho
    if (props.categoria === 'trabalho') return variaveis.backgroundAzul
  }
}

export const Card = styled.div`
  width: 250px;
  height: 350px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  text-align: center;
  background-color: #f9f9f9;
  justify-self: center;
  align-self: center;
`

export const CardHeader = styled.div<Props>`
  background-color: ${(props) => retornaCorDeFundo(props)};
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
