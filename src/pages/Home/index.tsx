import { useSelector } from 'react-redux'
import BotaoCadastrar from '../../components/BotaoCadastrar'
import Header from '../../containers/Header'
import Main from '../../containers/Main'
import { RootState } from '../../store'

const Home = () => {
  const filtro = useSelector((state: RootState) => state.filtro)

  // Função para aplicar o filtro a um contato
  const aplicarFiltro = (contato: { nome: string; email: string }) => {
    const filtroNome = filtro.nome
      ? contato.nome.toLowerCase().includes(filtro.nome.toLowerCase())
      : true

    const filtroEmail = filtro.email
      ? contato.email.toLowerCase().includes(filtro.email.toLowerCase())
      : true

    // Retorna true se algum dos filtros forem verdadeiros
    return filtroNome || filtroEmail
  }

  return (
    <>
      <Header />
      <Main filtro={aplicarFiltro} categoria={''} />
      <BotaoCadastrar />
    </>
  )
}

export default Home
