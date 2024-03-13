import styled from "styled-components";
import { colors } from "../../shared/theme";

export const FeedbackWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  border-radius: 4px;
  gap: 24px;
  padding-top: 64px;
  padding-bottom: 102px;
  box-sizing: border-box;
  padding-inline: 45px;
`;

export const FeedbackTitle = styled.p`
  font-size: 20px;
  line-height: 27.24px;
  text-align: center;
  font-weight: 700;
  color: ${colors.gray[800]};
  word-wrap: break-word;
`;

export const FeedbackButton = styled.button`
  text-transform: uppercase;
  background-color: ${colors.blue[200]};
  width: 173px;
  height: 40px;
  padding: 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 700;
  color: white;
  line-height: 16.34px;
  font-size: 12px;
`;
