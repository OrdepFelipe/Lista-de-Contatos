import { useSelector } from 'react-redux'
import BotaoCadastrar from '../../components/BotaoCadastrar'
import Header from '../../containers/Header'
import Main from '../../containers/Main'
import { RootState } from '../../store'

const Home = () => {
  const { nome, email } = useSelector((state: RootState) => state.filtro)

  const aplicarFiltro = (contato: {
    contato: string
    email: string
    nome: string
  }) => {
    let resultFiltro = true
    if (nome) {
      resultFiltro = contato.nome.toLowerCase().includes(nome.toLowerCase())
    }
    if (email) {
      resultFiltro = contato.email.toLowerCase().includes(email.toLowerCase())
    }
    return resultFiltro
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
