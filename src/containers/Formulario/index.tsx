import { useDispatch } from 'react-redux'
import * as enums from '../../utils/enums/Categoria'
import * as S from './styles'
import { useState } from 'react'
import { cadastrar } from '../../store/redurcers/contato'
import { useNavigate } from 'react-router-dom'
import { BotaoVoltar } from './styles'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [contato, setContato] = useState('')
  const [categoria, setCategoria] = useState(enums.Categoria.AMIGO)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!nome || !email || !contato) {
      alert('Todos os campos são obrigatórios!')
      return
    }

    dispatch(
      cadastrar({
        nome,
        contato,
        email,
        categoria
      })
    )
    navigate('/')
    // Limpar os campos após o envio
    setNome('')
    setEmail('')
    setContato('')
    setCategoria(enums.Categoria.AMIGO)
  }

  return (
    <S.MainContainer>
      <h2>Adicionar novo contato</h2>
      <S.Form onSubmit={handleSubmit}>
        <S.Inputs
          type="text"
          placeholder="Nome do Contato"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <S.Inputs
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <S.Inputs
          type="number"
          placeholder="Número de contato"
          value={contato}
          onChange={(e) => setContato(e.target.value)}
        />

        <S.Opcoes>
          <p>Categoria</p>
          {/*
           > Object.values() ---> é um método estático que retorna um array

          > Através do map iteramos no objeto enums.Categoria que retorna um array contendo os valores do objeto.

          */}
          {Object.values(enums.Categoria).map((categoria) => (
            <div key={categoria}>
              <input
                value={categoria}
                type="radio"
                name="categoria"
                id={categoria}
                defaultChecked={categoria === enums.Categoria.AMIGO}
                onChange={() => setCategoria(categoria)}
              />{' '}
              <label htmlFor={categoria}>{categoria}</label>
            </div>
          ))}
        </S.Opcoes>
        <S.Botoes>
          <S.BotaoCadastrar type="submit" value="Cadastrar Contato" />
          <BotaoVoltar type="submit" to="../">
            Voltar a lista de contatos
          </BotaoVoltar>
        </S.Botoes>
      </S.Form>
    </S.MainContainer>
  )
}

export default Formulario
