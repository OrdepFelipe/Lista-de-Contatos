import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import EstiloGlobal from './styles'
import Home from './pages/Home/index'
import Cadastro from './pages/Cadastro/index'
import { Provider } from 'react-redux'
import { configuraStore } from './store'

const store = configuraStore()

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/cadastro',
    element: <Cadastro />
  }
])

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <EstiloGlobal />
        <div>
          <RouterProvider router={rotas} />
        </div>
      </Provider>
    </div>
  )
}

export default App
