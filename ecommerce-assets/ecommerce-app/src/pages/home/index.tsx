import { useFetch } from "../../hooks/useFetch"
import Header from "../../components/Header";
import ListMovies from "./components/ListMovies";
import LoadingSpinner from "../../components/LoadingSpinner";
import { IProducts } from "../../services/api/types";
import Container from "../../components/Container";

export const Home = () => {
    const { data: products } = useFetch<IProducts[]>('/products')

    return (
      <Container>
        <Header />
        { products ? <ListMovies products={products} /> : <LoadingSpinner /> }
      </Container>
    )
  }
