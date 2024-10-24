import { renderizaComProvider } from '../../../utils/test'
import Header from '../index'
import { screen } from '@testing-library/react'

describe('Teste para o componente Header', () => {
  test('Deve renderizar corretamente', () => {
    renderizaComProvider(<Header />)
    expect(screen.getByText('Lista de Contatos')).toBeInTheDocument()
  })
  it('Deve renderizar o Input', () => {
    renderizaComProvider(<Header />)
    expect(screen.getByTestId('input')).toBeInTheDocument()
  })
})
