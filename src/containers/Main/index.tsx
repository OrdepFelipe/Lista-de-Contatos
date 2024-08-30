import { useSelector } from 'react-redux'
import CardContact from '../../components/Cards'
import { RootState } from '../../store'
import { Container } from './styles'

export type Props = {
  categoria: string
  filtro?: (contato: any) => boolean
}

const Main = ({ filtro = () => true }: Props) => {
  const contatos = useSelector((state: RootState) => state.contato.itens)
  const contatosFiltrados = contatos.filter(filtro)
  const contatosFamilia = contatosFiltrados.filter(
    (contato) => contato.categoria === 'familia'
  )
  const contatosAmigo = contatosFiltrados.filter(
    (contato) => contato.categoria === 'amigo'
  )
  const contatosTrabalho = contatosFiltrados.filter(
    (contato) => contato.categoria === 'trabalho'
  )

  return (
    <>
      <Container categoria={'familia'}>
        <h2>Família</h2>
        {contatosFamilia.map((contato) => (
          <CardContact
            nome={contato.nome}
            contato={contato.contato}
            email={contato.email}
            imagem={contato.imagem}
            key={contato.contato}
            categoria={contato.categoria}
          />
        ))}
      </Container>
      <Container categoria={'amigo'}>
        <h2>Amigos</h2>
        {contatosAmigo.map((contato) => (
          <CardContact
            nome={contato.nome}
            contato={contato.contato}
            email={contato.email}
            imagem={contato.imagem}
            key={contato.contato}
            categoria={contato.categoria}
          />
        ))}
      </Container>
      <Container categoria={'trabalho'}>
        <h2>Trabalho</h2>
        {contatosTrabalho.map((contato) => (
          <CardContact
            nome={contato.nome}
            contato={contato.contato}
            email={contato.email}
            imagem={contato.imagem}
            key={contato.contato}
            categoria={contato.categoria}
          />
        ))}
      </Container>
    </>
  )
}

export default Main
