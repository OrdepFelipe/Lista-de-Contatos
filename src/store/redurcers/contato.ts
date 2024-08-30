import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'
import * as enums from '../../utils/enums/Categoria'

type CardState = {
  itens: Contato[]
}

const initialState: CardState = {
  itens: [
    {
      nome: 'Pedro',
      contato: '21996966969',
      email: 'pefelipe@gmail.com',
      categoria: enums.Categoria.AMIGO
    },
    {
      nome: 'Ana',
      contato: '21991234567',
      email: 'ana.silva@gmail.com',
      categoria: enums.Categoria.FAMILIA
    },
    {
      nome: 'Carlos',
      contato: '21998765432',
      email: 'carlos.mendes@gmail.com',
      categoria: enums.Categoria.TRABALHO
    },
    {
      nome: 'Beatriz',
      contato: '21997654321',
      email: 'bia.lima@gmail.com',
      categoria: enums.Categoria.AMIGO
    },
    {
      nome: 'Roberto',
      contato: '21996543210',
      email: 'roberto.santos@gmail.com',
      categoria: enums.Categoria.TRABALHO
    },
    {
      nome: 'Julia',
      contato: '21995432109',
      email: 'julia.ferreira@gmail.com',
      categoria: enums.Categoria.FAMILIA
    },
    {
      nome: 'Lucas',
      contato: '21994321098',
      email: 'lucas.rocha@gmail.com',
      categoria: enums.Categoria.AMIGO
    },
    {
      nome: 'Ana Clara',
      contato: '21993210987',
      email: 'ana.clara@gmail.com',
      categoria: enums.Categoria.FAMILIA
    },
    {
      nome: 'Pedro Henrique',
      contato: '21992109876',
      email: 'pedro.henrique@gmail.com',
      categoria: enums.Categoria.TRABALHO
    },
    {
      nome: 'Carlos Eduardo',
      contato: '21991098765',
      email: 'carlos.eduardo@gmail.com',
      categoria: enums.Categoria.AMIGO
    },
    {
      nome: 'Beatriz Helena',
      contato: '21990987654',
      email: 'bia.helena@gmail.com',
      categoria: enums.Categoria.TRABALHO
    },
    {
      nome: 'Roberto Luiz',
      contato: '21989876543',
      email: 'roberto.luiz@gmail.com',
      categoria: enums.Categoria.FAMILIA
    },
    {
      nome: 'Julia Maria',
      contato: '21988765432',
      email: 'julia.maria@gmail.com',
      categoria: enums.Categoria.AMIGO
    },
    {
      nome: 'Lucas Gabriel',
      contato: '21987654321',
      email: 'lucas.gabriel@gmail.com',
      categoria: enums.Categoria.TRABALHO
    },
    {
      nome: 'Ana Paula',
      contato: '21986543210',
      email: 'ana.paula@gmail.com',
      categoria: enums.Categoria.FAMILIA
    },
    {
      nome: 'Pedro Lucas',
      contato: '21985432109',
      email: 'pedro.lucas@gmail.com',
      categoria: enums.Categoria.AMIGO
    },
    {
      nome: 'Carlos Alberto',
      contato: '21984321098',
      email: 'carlos.alberto@gmail.com',
      categoria: enums.Categoria.TRABALHO
    },
    {
      nome: 'Beatriz Souza',
      contato: '21983210987',
      email: 'bia.souza@gmail.com',
      categoria: enums.Categoria.FAMILIA
    },
    {
      nome: 'Roberto Carlos',
      contato: '21982109876',
      email: 'roberto.carlos@gmail.com',
      categoria: enums.Categoria.AMIGO
    },
    {
      nome: 'Julia Regina',
      contato: '21981098765',
      email: 'julia.regina@gmail.com',
      categoria: enums.Categoria.TRABALHO
    }
  ]
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
    remover: (state, action: PayloadAction<string>) => {
      state.itens = [
        ...state.itens.filter((contato) => contato.contato != action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexNome = state.itens.findIndex(
        (n) => n.nome === action.payload.nome
      )
      const indexEmail = state.itens.findIndex(
        (e) => e.email === action.payload.email
      )
      const indexContato = state.itens.findIndex(
        (c) => c.contato === action.payload.contato
      )
      if (indexNome >= 0) {
        state.itens[indexNome] = action.payload
      }
      if (indexEmail >= 0) {
        state.itens[indexEmail] = action.payload
      }
      if (indexContato >= 0) {
        state.itens[indexContato] = action.payload
      }
    }
  }
})
export const { cadastrar, remover, editar } = contatoSlice.actions
export default contatoSlice.reducer
