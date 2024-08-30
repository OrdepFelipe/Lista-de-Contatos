import styled from 'styled-components'
import { Props } from './index'
import variaveis from '../../styles/variaveis'

export default function retornaCorDeFundo(props: Props) {
  if ('categoria' in props) {
    if (props.categoria === 'familia') return variaveis.verde
    if (props.categoria === 'amigo') return variaveis.vermelho
    if (props.categoria === 'trabalho') return variaveis.azul
  }
}

export const Container = styled.div<Props>`
  background-color: ${(props) => retornaCorDeFundo(props)};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-between;
  column-gap: 5px;
  row-gap: 16px;
  height: auto;
  padding: 24px;
  h2 {
    grid-column: 1 / -1;
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    justify-self: center;
    align-self: center;
    text-transform: uppercase;
    font-weight: bold;
    border-bottom: 6px dotted black;
  }
`
