/**import { configureStore } from '@reduxjs/toolkit'
import contatoRedurcer from './redurcers/contato'
import filtroRedurcer from './redurcers/filtro'

const store = configureStore({
  reducer: {
    contato: contatoRedurcer,
    filtro: filtroRedurcer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export type RootState = ReturnType<typeof store.getState>
export default store */

import { combineReducers, configureStore } from '@reduxjs/toolkit'

import contatoRedurcer from './redurcers/contato'
import filtroRedurcer from './redurcers/filtro'

const rootReducer = combineReducers({
  contato: contatoRedurcer,
  filtro: filtroRedurcer
})

export function configuraStore(preloadedState?: RootState) {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof configuraStore>
