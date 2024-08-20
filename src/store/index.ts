import { configureStore } from '@reduxjs/toolkit'
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
export default store
