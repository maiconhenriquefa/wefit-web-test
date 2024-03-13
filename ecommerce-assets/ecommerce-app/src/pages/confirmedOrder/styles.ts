import styled from "styled-components";
import ConfirmedOrderDesktop from "./../../assets/icons/confirmed-order-desktop.png";
import ConfirmedOrderMobile from "./../../assets/icons/confirmed-order-mobile.png";
import { breakpoints } from "../../shared/theme";

export const ImageConfirmedOrder = styled.div`
  width: 294.96px;
  height: 307px;
  background-image: url(${ConfirmedOrderDesktop});
  border-width: 0;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: ${breakpoints.mobileWidth}) {
    background-image: url(${ConfirmedOrderMobile});
    width: 178%.63;
    height: 265.36px;
  }
`;
