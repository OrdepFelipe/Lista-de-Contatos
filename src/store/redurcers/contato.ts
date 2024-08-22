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
    },
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((contato) => contato.contato != action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexContato = state.itens.findIndex(
        (t) => (t.contato = action.payload.contato)
      )
      if (indexContato >= 0) {
        state.itens[indexContato] = action.payload
      }
    }
  }
})
export const { cadastrar, remover, editar } = contatoSlice.actions
export default contatoSlice.reducer
