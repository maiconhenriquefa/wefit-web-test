import styled from "styled-components";
import { colors } from "../../../../shared/theme";

interface ButtonMovieProps {
  hasProductCart: boolean;
}

export const ListMoviesWrapper = styled.div`
  display: flex;
  row-gap: 24px;
  column-gap: 16px;
  flex-wrap: wrap;
`;

export const CardMovie = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 312px;
  height: 324px;
  flex-grow: 1;
  background-color: white;
  padding: 16px;
  border-radius: 4px;
  align-items: center;
  box-sizing: border-box;
`;

export const ImageMovie = styled.img`
  height: 188px;
  width: 147px;
`;

export const TitleMovie = styled.p`
  text-align: center;
  font-size: 12px;
  font-weight: 700;
  color: ${colors.gray[500]};
  line-height: 16.34px;
`;

export const PriceMovie = styled.p`
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  color: ${colors.gray[800]};
  line-height: 21.79px;
`;

export const TextButtonMovie = styled(TitleMovie)`
  color: white;
`;
export const ButtonMovie = styled.button<ButtonMovieProps>`
  text-transform: uppercase;
  background-color: ${(props) =>
    props.hasProductCart ? colors.green[500] : colors.blue[200]};
  width: 100%;
  height: 40px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  font-size: 12px;
  font-weight: 700;
  color: white;
  line-height: 16.34px;
  font-size: 12px;
`;
export const WrapperCountCart = styled.div`
  display: flex;
  gap: 3.4px;
  align-items: flex-end;
`;

export const TextCountCart = styled.p`
  font-size: 12px;
  line-height: 16.34px;
  color: white;
  font-weight: 400;
`;
