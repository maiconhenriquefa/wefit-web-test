import styled from "styled-components";
import { colors } from "../../shared/theme";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  padding-bottom: 40px;
  background-color: ${colors.gray[800]};
  box-sizing: border-box;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 1080px;
  margin: 0 auto;
  padding-inline: 16px;
  box-sizing: border-box;
`;
