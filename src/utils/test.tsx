import { render, RenderOptions } from '@testing-library/react'
import { AppStore, RootState, configuraStore } from '../store'
import { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadState?: RootState
  store?: AppStore
}

export function renderizaComProvider(
  elemento: React.ReactElement, //um elemento do React
  {
    preloadState = {
      contato: {
        itens: []
      },
      filtro: {
        nome: '',
        email: '',
        numero: 0
      }
    }, //Estado inicial que queremos, nesse caso vazio
    store = configuraStore(preloadState),
    ...opcoesAdicionais
  }: ExtendedRenderOptions = {}
) {
  // eslint-disable-next-line @typescript-eslint/ban-types
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>
  }

  return {
    store,
    ...render(elemento, {
      wrapper: Wrapper,
      ...opcoesAdicionais
    })
  }
}
