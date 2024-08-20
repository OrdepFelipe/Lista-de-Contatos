import * as enums from '../utils/enums/Categoria'

class Contato {
  nome: string
  contato: number
  email: string
  categoria: enums.Categoria
  imagem?: string

  constructor(
    nome: string,
    contato: number,
    email: string,
    categoria: enums.Categoria,
    imagem?: string
  ) {
    this.imagem = imagem
    this.nome = nome
    this.contato = contato
    this.email = email
    this.categoria = categoria
  }
}

export default Contato
