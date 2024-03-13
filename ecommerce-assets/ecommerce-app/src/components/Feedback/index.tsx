import { FeedbackButton, FeedbackTitle, FeedbackWrapper } from "./styles";
import { ReactNode } from "react";

interface IFeedbackProps {
    title: string
    imageComponent: ReactNode;
    button: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
}

const Feedback = ({title, imageComponent, button}: IFeedbackProps) => {
  return (
    <FeedbackWrapper  >
    <FeedbackTitle>{title}</FeedbackTitle >
    {imageComponent}    
    <FeedbackButton onClick={button.onClick} {...button}>{button.title}</FeedbackButton>
  </FeedbackWrapper >
  )
}

export default Feedback