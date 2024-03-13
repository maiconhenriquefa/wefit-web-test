import styled from "styled-components";
import { colors } from "../../../../../shared/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 16px;
  background-color: white;
  box-sizing: border-box;
  border-radius: 4px;
  gap: 21px;
`;

export const MovieDetails = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 16px;
`;

export const WrapperMovieInfoDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: end;
  align-items: end;
  gap: 16px;
`;
export const RowMovieInfoDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 16px;
`;

export const WrapperSubTotally = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

export const WrapperTotallyPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`;
export const ResumeInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const InfoSubTotallyMovie = styled.h3`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  line-height: 16.34px;
  color: ${colors.gray[700]};
`;
