import { ReactNode } from "react"
import { Wrapper, Container as ContainerElement } from "./styles"

const Container = ({children}: {children: ReactNode}) => {
  return (
    <ContainerElement>
      <Wrapper>{children}</Wrapper>
    </ContainerElement>
  )
}

export default Container