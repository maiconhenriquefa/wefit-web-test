import styled from "styled-components";
import EmptyCartDesktop from "./../../assets/icons/empty-cart-desktop.png";
import EmptyCartMobile from "./../../assets/icons/empty-cart-mobile.png";
import { breakpoints } from "../../shared/theme";

export const ImageEmptyCart = styled.div`
  width: 447px;
  height: 265.36px;
  background-image: url(${EmptyCartDesktop});
  border-width: 0;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: ${breakpoints.mobileWidth}) {
    background-image: url(${EmptyCartMobile});
    width: 178%.63;
    height: 265.36px;
  }
`;
