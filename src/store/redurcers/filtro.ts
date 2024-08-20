import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type FiltroState = {
  nome: string
  email: string
  numero: number
}

const initialState: FiltroState = {
  nome: '',
  email: '',
  numero: 0
}

const FiltroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    resultFiltro: (state, action: PayloadAction<FiltroState>) => {
      state.email = action.payload.email
      state.nome = action.payload.nome
      state.numero = action.payload.numero
    }
  }
})
export const { resultFiltro } = FiltroSlice.actions
export default FiltroSlice.reducer
