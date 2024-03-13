import styled from "styled-components";
import EmptyCartDesktop from "./../../../../../assets/icons/empty-cart-desktop.png";
import EmptyCartMobile from "./../../../../../assets/icons/empty-cart-mobile.png";
import { breakpoints, colors } from "../../../../../shared/theme";

export const CardMovieDetails = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px;
  background-color: white;
  box-sizing: border-box;
  border-radius: 4px;
  gap: 24px;
`;

export const WrapperTitleMovieDetails = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns:
    minmax(240px, 280px) minmax(300px, 348px) minmax(300px, 348px)
    24px;
  height: 24px;
`;

export const TitleMovieDetails = styled.h3`
  color: ${colors.gray[700]};
  font-size: 14px;
  line-height: 19.07px;
  font-weight: 700;
`;

export const ContainerInfoMovieDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const WrapperInfoMovieDetails = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns:
    minmax(240px, 280px) minmax(300px, 348px) minmax(300px, 348px)
    24px;
  align-items: center;
  margin-top: 24px;
`;

export const WrapperProductDetails = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const ImageMovie = styled.img`
  height: 114px;
  width: 91px;
`;

export const WrapperDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const InfoTitleMovie = styled.p`
  color: ${colors.gray[800]};
  font-size: 14px;
  line-height: 19.07px;
  font-weight: 700;
`;

export const InfoPriceMovie = styled(InfoTitleMovie)`
  font-size: 16px;
  line-height: 21.79px;
`;

export const InputCount = styled.input`
  border-radius: 4px;
  border: 1px solid ${colors.gray[200]};
  width: 62px;
  height: 26px;
  background-color: ${colors.white[500]};
  color: ${colors.gray[800]};
  font-size: 14px;
  font-weight: 400;
  line-height: 19.07px;
  text-align: center;
`;

export const ResumeInfo = styled.div`
  display: flex;
  width: 100%;
  height: 34px;
  justify-content: space-between;
  align-items: center;
`;

export const WrapperTotallyPrice = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
`;

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
export const CardMovieDetailsMobile = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px;
  background-color: white;
  box-sizing: border-box;
  border-radius: 4px;
  gap: 24px;
`;
