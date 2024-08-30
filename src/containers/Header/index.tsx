import { useDispatch } from 'react-redux'
import { HeaderApp, Logo, HeaderInput } from './styles'
import { useState } from 'react'
import { resultFiltro } from '../../store/redurcers/filtro'

const Header = () => {
  const dispatch = useDispatch()
  const [valorDigitado, setValorDigitado] = useState('')
  const handleChange = (evento: React.ChangeEvent<HTMLInputElement>) => {
    const valor = evento.target.value
    setValorDigitado(valor)

    dispatch(
      resultFiltro({
        nome: valor,
        email: valor,
        contato: valor
      })
    )
  }

  return (
    <HeaderApp>
      <Logo>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="bi bi-person-lines-fill"
          viewBox="0 0 16 16"
        >
          <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
        </svg>
        <h1>Lista de Contatos</h1>
      </Logo>
      <HeaderInput
        type="text"
        placeholder="Qual contato deseja encontrar?"
        value={valorDigitado}
        onChange={handleChange}
      />
    </HeaderApp>
  )
}

export default Header
