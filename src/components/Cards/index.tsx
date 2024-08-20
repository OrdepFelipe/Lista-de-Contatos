import { Card, CardBody, CardHeader } from './styles'

type Props = {
  nome: string
  contato: number
  email: string
  imagem?: string
  categoriaSt: string
}

const CardContact: React.FC<Props> = ({
  nome,
  contato,
  email,
  categoriaSt
}) => {
  return (
    <Card>
      <CardHeader categoria={categoriaSt}>
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
    </Card>
  )
}

export default CardContact
