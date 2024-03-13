import { useContext } from "react"
import IconDownCircle from "../../../../../components/Icons/DownCircle"
import IconPLusCircle from "../../../../../components/Icons/PlusCircle"
import { CartContext, IProductsCart } from "../../../../../context/cart"
import { Divider, FinishedOrderButton, ImageMovie, InfoPriceMovie, InfoTitleMovie, InputCount, TextTotally, TextTotallyPrice, WrapperCountMovie } from "../styles"
import { Container, InfoSubTotallyMovie, MovieDetails, ResumeInfo, RowMovieInfoDetails, WrapperMovieInfoDetails, WrapperSubTotally, WrapperTotallyPrice } from "./styles"
import { useNavigate } from "react-router-dom"
import formatCurrentBRL from "../../../../../shared/functions/formatCurrentBRL"
import IconTrashMobile from "../../../../../components/Icons/TrashMobile"

interface CardMovieDetailsMobileProps {
  productsCart: IProductsCart[]
}

const CardMovieDetailsMobile = ({ productsCart }: CardMovieDetailsMobileProps) => {
  const {
    totallyProductsCart,
    addProductToCart,
    removeProductToCart,
    clearAllProductToCart,
    clearProductToCart
  } = useContext(CartContext)
  const navigate = useNavigate()

  const handleOnClickFinishOrder = () => {
    clearAllProductToCart()
    navigate('/pedido-confirmado')
  }

  return (
    <Container>
      {productsCart.map((productCart) => (
        <MovieDetails key={productCart.id}>
          <ImageMovie style={{width: '64px', height: '82px'}} src={productCart.image} />
          <WrapperMovieInfoDetails>
            <RowMovieInfoDetails>
              <InfoTitleMovie style={{minWidth: '102px', wordBreak: 'break-word'}}>{productCart.title}</InfoTitleMovie>
              <InfoPriceMovie>{formatCurrentBRL(productCart.price)}</InfoPriceMovie>
              <IconTrashMobile onClick={() => clearProductToCart(productCart)} style={{ justifySelf: 'end', cursor: 'pointer' }} />
            </RowMovieInfoDetails>
            <RowMovieInfoDetails>
              <WrapperCountMovie>
                <IconDownCircle onClick={() => removeProductToCart(productCart)} style={{ cursor: 'pointer' }} />
                <InputCount style={{width: '59px'}} value={productCart.count} />
                <IconPLusCircle onClick={() => addProductToCart(productCart)} style={{ cursor: 'pointer' }} />
              </WrapperCountMovie>
              <WrapperSubTotally>
                <InfoSubTotallyMovie>Subtotal</InfoSubTotallyMovie>
                <InfoPriceMovie>{formatCurrentBRL(productCart.price * productCart.count)}</InfoPriceMovie>
              </WrapperSubTotally>
            </RowMovieInfoDetails>
          </WrapperMovieInfoDetails>
        </MovieDetails>
      ))}
      <Divider style={{margin: 0}}/>
      <ResumeInfo>
      <WrapperTotallyPrice>
          <TextTotally>TOTAL</TextTotally>
          <TextTotallyPrice>{formatCurrentBRL(totallyProductsCart.price)}</TextTotallyPrice>
      </WrapperTotallyPrice>
      <FinishedOrderButton style={{width: '100%', height: '40px'}} onClick={handleOnClickFinishOrder}>FINALIZAR PEDIDO</FinishedOrderButton>
      </ResumeInfo>
    </Container>
  )
}

export default CardMovieDetailsMobile