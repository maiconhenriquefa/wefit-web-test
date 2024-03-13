import styled, { keyframes } from "styled-components";
import { breakpoints, colors } from "../../shared/theme";

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-top: 4px solid ${colors.gray[600]};
    border-left: 4px solid ${colors.gray[600]};
    border-bottom: 4px solid ${colors.gray[600]};
    opacity: .6;
  }
  100% {
    transform: rotate(360deg);
    border-top: 4px solid ${colors.gray[300]};
    border-left: 4px solid ${colors.gray[300]};
    border-bottom: 4px solid ${colors.gray[300]};
    opacity: 1;
  }
`;

export const Spinner = styled.div`
  margin-top: 53.8px;
  align-self: center;
  justify-self: center;
  border: 4px solid ${colors.gray[600]};
  border-radius: 50%;
  width: 62.25px;
  height: 62.25px;
  animation: ${spinAnimation} 1s linear infinite;

  @media (max-width: ${breakpoints.mobileWidth}) {
    margin-top: 13.8px;
  }
`;
