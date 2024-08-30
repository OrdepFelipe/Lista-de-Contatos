import { useDispatch } from 'react-redux'
import {
  BtnCancelar,
  BtnEditar,
  BtnSalvar,
  Card,
  CardBody,
  CardHeader
} from './styles'
import { useEffect, useState } from 'react'
import Contato from '../../models/Contato'
import { editar, remover } from '../../store/redurcers/contato'

type Props = Contato

const CardContact: React.FC<Props> = ({
  nome: nomeOriginal,
  contato: contatoOriginal,
  email: emailOriginal,
  categoria
}) => {
  const dispatch = useDispatch()
  const [estaEditando, setEditando] = useState(false) // inicia como false
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [contato, setContato] = useState('')

  useEffect(() => {
    if (nomeOriginal.length > 0) {
      setNome(nomeOriginal)
    }
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
    if (contatoOriginal.length > 0) {
      setContato(contatoOriginal)
    }
  }, [nomeOriginal, contatoOriginal, emailOriginal])

  function cancelarEdicao() {
    setEditando(false)
    setNome(nomeOriginal)
    setEmail(emailOriginal)
    setContato(contatoOriginal)
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
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <input
              type="text"
              value={contato}
              onChange={(e) => setContato(e.target.value)}
            />
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </>
        ) : (
          <>
            <h3>{nome}</h3>
            <p>{contato}</p>
            <p>{email}</p>
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
                    nome,
                    contato,
                    email,
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
