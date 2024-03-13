import { useNavigate } from "react-router-dom"
import Feedback from "../../components/Feedback"
import Header from "../../components/Header"
import { ImageConfirmedOrder } from "./styles"
import Container from "../../components/Container"

export const ConfirmedOrder = () => {
  const navigate = useNavigate()
  
  return (
    <Container>
      <Header  />
      <Feedback 
        title="Compra realizada com sucesso!" 
        button={{title: 'voltar', onClick: () => navigate('/')}}
        imageComponent={<ImageConfirmedOrder/>}
        />
    </Container>
  )
}
