import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type FiltroState = Contato

const initialState: FiltroState = {
  nome: '',
  email: '',
  contato: ''
}

const FiltroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    resultFiltro: (state, action: PayloadAction<FiltroState>) => {
      state.email = action.payload.email
      state.nome = action.payload.nome
      state.contato = action.payload.contato
    }
  }
})
export const { resultFiltro } = FiltroSlice.actions
export default FiltroSlice.reducer
