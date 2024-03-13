import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { CartContext, IProductsCart } from "../../../../../context/cart"
import { CardMovieDetails, ContainerInfoMovieDetails, ImageMovie, InfoPriceMovie, InfoTitleMovie, InputCount, ResumeInfo, TitleMovieDetails, WrapperDescription, WrapperInfoMovieDetails, WrapperProductDetails, WrapperTitleMovieDetails, WrapperTotallyPrice } from "./styles"
import IconDownCircle from "../../../../../components/Icons/DownCircle"
import formatCurrentBRL from "../../../../../shared/functions/formatCurrentBRL"
import IconPLusCircle from "../../../../../components/Icons/PlusCircle"
import IconTrashDesktop from "../../../../../components/Icons/TrashDesktop"
import { Divider, FinishedOrderButton, TextTotally, TextTotallyPrice, WrapperCountMovie } from "../styles"

interface CardMovieDetailsDesktopProps {
  productsCart: IProductsCart[]
}

const CardMovieDetailsDesktop = ({ productsCart }: CardMovieDetailsDesktopProps) => {
  const {
    totallyProductsCart,
    addProductToCart,
    removeProductToCart,
    clearAllProductToCart,
    clearProductToCart,
  } = useContext(CartContext)
  const navigate = useNavigate()

  const handleOnClickFinishOrder = () => {
    clearAllProductToCart()
    navigate('/pedido-confirmado')
  }

  return (
    <CardMovieDetails>
      <WrapperTitleMovieDetails>
        <TitleMovieDetails>PRODUTO</TitleMovieDetails>
        <TitleMovieDetails>QTD</TitleMovieDetails>
        <TitleMovieDetails>SUBTOTAL</TitleMovieDetails>
      </WrapperTitleMovieDetails>
      <ContainerInfoMovieDetails>
        {productsCart.map((productCart) => (
          <WrapperInfoMovieDetails key={productCart.id}>
            <WrapperProductDetails>
              <ImageMovie src={productCart.image} alt={`Capa do filme ${productCart.title}`} />
              <WrapperDescription>
                <InfoTitleMovie>{productCart.title}</InfoTitleMovie>
                <InfoPriceMovie>{formatCurrentBRL(productCart.price)}</InfoPriceMovie>
              </WrapperDescription>
            </WrapperProductDetails>
            <WrapperCountMovie>
              <IconDownCircle onClick={() => removeProductToCart(productCart)} style={{ cursor: 'pointer' }} />
              <InputCount value={productCart.count} />
              <IconPLusCircle onClick={() => addProductToCart(productCart)} style={{ cursor: 'pointer' }} />
            </WrapperCountMovie>
            <InfoPriceMovie>{formatCurrentBRL(productCart.price * productCart.count)}</InfoPriceMovie>
            <IconTrashDesktop onClick={() => clearProductToCart(productCart)} style={{ justifySelf: 'end', padding: '6px', cursor: 'pointer' }} />
          </WrapperInfoMovieDetails>
        ))}
      </ContainerInfoMovieDetails>
      <Divider />
      <ResumeInfo>
        <FinishedOrderButton onClick={handleOnClickFinishOrder}>FINALIZAR PEDIDO</FinishedOrderButton>
        <WrapperTotallyPrice>
          <TextTotally>TOTAL</TextTotally>
          <TextTotallyPrice>{formatCurrentBRL(totallyProductsCart.price)}</TextTotallyPrice>
        </WrapperTotallyPrice>
      </ResumeInfo>
    </CardMovieDetails>
  )
}

export default CardMovieDetailsDesktop