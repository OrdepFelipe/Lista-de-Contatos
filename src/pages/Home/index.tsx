import { useSelector } from 'react-redux'
import BotaoCadastrar from '../../components/BotaoCadastrar'
import Header from '../../containers/Header'
import Main from '../../containers/Main'
import { RootState } from '../../store'

const Home = () => {
  const { nome, email, numero } = useSelector(
    (state: RootState) => state.filtro
  )

  const aplicarFiltro = (contato: {
    contato: number
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
    if (numero) {
      resultFiltro = contato.contato.toString().includes(numero.toString())
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
