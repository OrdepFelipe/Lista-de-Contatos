import Contato from '../../models/Contato'
import { BtnCancelar, BtnEditar, Card, CardBody, CardHeader } from './styles'
import { useState } from 'react'

type Props = Contato

const CardContact: React.FC<Props> = ({ nome, contato, email, categoria }) => {
  const [estaEditando, setEditando] = useState(true)

  return (
    <Card>
      <CardHeader $categoria={categoria}>
        <img
          src="https://img.freepik.com/vetores-premium/icone-de-contato-do-usuario-em-vetor-de-estilo-simples_833641-1022.jpg"
          alt={nome}
        />
      </CardHeader>
      <CardBody>
        <h3>{nome}</h3>
        <p>{contato}</p>
        <p>{email}</p>
      </CardBody>
      <div>
        {estaEditando ? (
          <BtnEditar
            as="button"
            onClick={() => {
              setEditando(false)
            }}
          >
            Editar
          </BtnEditar>
        ) : (
          <>
            <BtnEditar as="button" onClick={() => setEditando(true)}>
              Salvar
            </BtnEditar>
            <BtnCancelar as="button" onClick={() => setEditando(true)}>
              Cancelar
            </BtnCancelar>
          </>
        )}
      </div>
    </Card>
  )
}

export default CardContact
