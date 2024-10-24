import { fireEvent, waitFor, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import Home from '../index'
import { renderizaComProvider } from '../../../utils/test'

describe('Teste no botao', () => {
  test('Teste para verificar se o botão está funcionando corretamente', async () => {
    renderizaComProvider(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<h2>Adicionar novo contato</h2>} />
        </Routes>
      </MemoryRouter>
    )

    const botaoCadastrar = screen.getByTestId('btn-cadastrar')
    fireEvent.click(botaoCadastrar)

    await waitFor(() => {
      // Verifica se a nova página foi carregada
      expect(screen.getByText('Adicionar novo contato')).toBeInTheDocument()
    })
  })
})
