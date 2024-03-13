import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { CartContext } from "../../context/cart"
import { HeaderWrapper, BoxCart, BoxTextsCart, Title, TitleCart, SubtitleCart } from "./styles"
import IconCartBag from "../Icons/CartBag"

const Header = () => {
    const {totallyProductsCart} = useContext(CartContext)

    const navigate = useNavigate()
    
    return (
    <HeaderWrapper>
    <Title onClick={() => navigate('/')}>
      WeMovies
    </Title>
    <BoxCart>
      <BoxTextsCart>
        <TitleCart>
          Meu Carrinho
        </TitleCart>
        <SubtitleCart>
          {`${totallyProductsCart.count} itens`}
        </SubtitleCart>
      </BoxTextsCart>
      <IconCartBag onClick={() => navigate('/carrinho')} cursor={'pointer'}/>
    </BoxCart>
  </HeaderWrapper>
  )
}

export default Header