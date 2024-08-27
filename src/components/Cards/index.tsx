import { useDispatch } from 'react-redux'
import {
  BtnCancelar,
  BtnEditar,
  BtnSalvar,
  Card,
  CardBody,
  CardHeader
} from './styles'
import { useState } from 'react'
import Contato from '../../models/Contato'
import { editar, remover } from '../../store/redurcers/contato'

type Props = Contato

const CardContact: React.FC<Props> = ({ nome, contato, email, categoria }) => {
  const dispatch = useDispatch()
  const [estaEditando, setEditando] = useState(false) // inicia como false
  const [nomeEd, setNome] = useState(nome)
  const [emailEd, setEmail] = useState(email)
  const [contatoEd, setContato] = useState(contato)

  function cancelarEdicao() {
    setEditando(false)
    setNome(nome)
    setContato(contato)
    setEmail(email)
  }

  return (
    <Card>
      <CardHeader $categoria={`${categoria}`}>
        <img
          src="https://img.freepik.com/vetores-premium/icone-de-contato-do-usuario-em-vetor-de-estilo-simples_833641-1022.jpg"
          alt={nome}
        />
      </CardHeader>
      <CardBody>
        {estaEditando ? (
          <>
            <input
              type="text"
              value={nomeEd}
              onChange={(e) => setNome(e.target.value)}
            />
            <input
              type="text"
              value={contatoEd}
              onChange={(e) => setContato(e.target.value)}
            />
            <input
              type="text"
              value={emailEd}
              onChange={(e) => setEmail(e.target.value)}
            />
          </>
        ) : (
          <>
            <h3>{nomeEd}</h3>
            <p>{contatoEd}</p>
            <p>{emailEd}</p>
          </>
        )}
      </CardBody>
      <div>
        {estaEditando ? (
          <>
            <BtnSalvar
              as="button"
              onClick={() => {
                dispatch(
                  editar({
                    nome: nomeEd,
                    contato: contatoEd,
                    email: emailEd,
                    categoria
                  })
                )
                setEditando(false)
              }}
            >
              Salvar
            </BtnSalvar>
            <BtnCancelar as="button" onClick={cancelarEdicao}>
              Cancelar
            </BtnCancelar>
          </>
        ) : (
          <>
            <BtnEditar as="button" onClick={() => setEditando(true)}>
              Editar
            </BtnEditar>
            <BtnCancelar as="button" onClick={() => dispatch(remover(contato))}>
              Remover
            </BtnCancelar>
          </>
        )}
      </div>
    </Card>
  )
}

export default CardContact
