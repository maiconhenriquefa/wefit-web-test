import { useContext } from 'react'
import IconAddCart from '../../../../components/Icons/AddCart'
import { ButtonMovie, CardMovie, ImageMovie, ListMoviesWrapper, PriceMovie, TextButtonMovie, TextCountCart, TitleMovie, WrapperCountCart } from './styles'
import { CartContext } from '../../../../context/cart'
import formatCurrentBRL from '../../../../shared/functions/formatCurrentBRL'
import { IProducts } from '../../../../services/api/types'

interface ListMoviesProps {
    products: IProducts[] | null
}

const ListMovies = ({products}: ListMoviesProps) => {
  const {productsCart, addProductToCart} = useContext(CartContext)

  return (
    <ListMoviesWrapper>
    {products?.map((product) => (
    <CardMovie key={product.id}>
      <ImageMovie src={product.image} alt={`Capa do filme ${product.title}`} rel='preload'/>
      <TitleMovie>{product.title}</TitleMovie>
      <PriceMovie>{formatCurrentBRL(product.price)}</PriceMovie>
      <ButtonMovie 
        onClick={() => addProductToCart(product)} 
        hasProductCart={!!productsCart.find(productCart => productCart.id === product.id)?.count}
        >
        <WrapperCountCart>
          <IconAddCart />
          <TextCountCart>
            {productsCart.find(productCart => productCart.id === product.id)?.count ?? '0'}
          </TextCountCart>
        </WrapperCountCart>
        <TextButtonMovie>Adicionar ao carrinho</TextButtonMovie>
      </ButtonMovie>
    </CardMovie>
    ))}
  </ListMoviesWrapper>
  )
}

export default ListMovies