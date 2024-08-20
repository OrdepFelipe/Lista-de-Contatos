import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type CardState = {
  itens: Contato[]
}

const initialState: CardState = {
  itens: []
}

const contatoSlice = createSlice({
  name: 'contato',
  initialState,
  reducers: {
    cadastrar: (state, action: PayloadAction<Contato>) => {
      //Verifico se o contato já existe
      const contatoJaExiste = state.itens.find(
        (contato) => contato.contato === action.payload.contato
      )
      if (contatoJaExiste) {
        alert('Contato já existe')
      } else {
        const contatoNovo = { ...action.payload }
        state.itens.push(contatoNovo)
      }
    }
  }
})
export const { cadastrar } = contatoSlice.actions
export default contatoSlice.reducer
