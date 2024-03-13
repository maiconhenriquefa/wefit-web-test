import { useContext, useEffect } from "react"
import Header from "../../components/Header"
import { ImageEmptyCart } from "./styles"
import { CartContext } from "../../context/cart"
import Feedback from "../../components/Feedback"
import { Spinner } from "../../components/LoadingSpinner/styles"
import { useMediaQuery } from "../../hooks/useMediaQuery"
import CardMovieDetailsDesktop from "./components/CardMovieDetails/CardMovieDetailsDesktop"
import CardMovieDetailsMobile from "./components/CardMovieDetails/CardMovieDetailsMobile"
import Container from "../../components/Container"

export const Cart = () => {
  const {
    productsCart,
    getProductsCart,
    isLoading
  } = useContext(CartContext)
  const { isMobile } = useMediaQuery()

  useEffect(() => { getProductsCart() }, [getProductsCart])

  return (
    <Container>
      <Header />
      {isLoading ? (
        <Spinner />
      ) : productsCart.length > 0 ? (
        isMobile ? (
          <CardMovieDetailsMobile productsCart={productsCart} />
        ) : (
          <CardMovieDetailsDesktop productsCart={productsCart} />
        )) : (
        <Feedback
          title="Parece que não há nada por aqui :("
          button={{
            title: 'Recarregar página',
            onClick: () => getProductsCart(),
            style: { textTransform: 'capitalize' }
          }}
          imageComponent={<ImageEmptyCart />}
        />
      )}
    </Container>
  )
}