import styled from "styled-components";
import { breakpoints, colors } from "../../shared/theme";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 88px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 20px;
  cursor: pointer;
`;

export const BoxCart = styled.a`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const BoxTextsCart = styled.div`
  display: flex;
  align-items: end;
  flex-direction: column;
`;

export const TitleCart = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 19.07px;
  color: white;

  @media (max-width: ${breakpoints.mobileWidth}) {
    display: none;
  }
`;

export const SubtitleCart = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 16.34px;
  color: ${colors.gray[700]};
`;

export const IconCart = styled.svg`
  width: 24px;
  height: 24px;
  fill: ${colors.white[500]};
`;
