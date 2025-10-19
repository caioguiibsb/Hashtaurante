import Card from './card'
import {pratosPrincipais, sobremesas, bebidas} from '../assets/cardapio.js'


const Cards = () => {
  return (
    <>
      {pratosPrincipais.map((item, index) => (
        <Card 
          key={index}
          titulo={item.nome}
          descricao={item.descricao}
          preco={item.preco}
          imagem={item.imagem}
        />
      ))}
    </>
  )
}

export default Cards