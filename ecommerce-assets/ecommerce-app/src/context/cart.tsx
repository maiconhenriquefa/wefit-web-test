import { ReactNode, createContext, useCallback, useState } from "react";
import { IProducts } from "../services/api/types";
import addDelay from "../shared/functions/addDelay";

export interface IProductsCart extends IProducts {
    count: number;
    amountPrice: number;
}

export interface CartContextProps {
    totallyProductsCart: {count: number, price: number};
    productsCart: IProductsCart[];
    addProductToCart: (product: IProducts) => void;
    removeProductToCart: (product: IProducts) => void;
    clearProductToCart: (product: IProducts) => void;
    clearAllProductToCart: () => void;
    getProductsCart: () => IProductsCart[];
    isLoading: boolean
}

interface CartProviderProps {
  children: ReactNode
}

const CartContext = createContext<CartContextProps>({} as CartContextProps)

const CartProvider = ({ children }: CartProviderProps) => {
  const [productsCart, setProductsCart] = useState<IProductsCart[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getProductsCart  = useCallback(() => {
    setIsLoading(true)
    addDelay(() => setIsLoading(false))
    
    return productsCart
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const addProductToCart = (product: IProducts) => {
    const copyProductsCart = [...productsCart];

    const item = copyProductsCart.find((copyProductCart) => copyProductCart.id === product.id);

    if (!item) {
      copyProductsCart.push({ ...product, amountPrice: product.price, count: 1});
    } else {
      item.count = item.count + 1;
      item.amountPrice = item.amountPrice + product.price;
    }

    setProductsCart(copyProductsCart);
  }

  const removeProductToCart = (product: IProducts) => {
    const copyProductsCart = [...productsCart];

    const item = copyProductsCart.find((copyProductCart) => copyProductCart.id === product.id);

    if (item && item.count > 1) {
      item.count = item.count - 1;
      item.amountPrice = item.amountPrice - product.price;
      setProductsCart(copyProductsCart);
    } else {
      const arrayFiltered = copyProductsCart.filter(
        (copyProductCart) => copyProductCart.id !== product.id
      );
      setProductsCart(arrayFiltered);
    }
  }

  const clearProductToCart = (product: IProducts) => {
    const copyProductsCart = [...productsCart];

    const arrayFiltered = copyProductsCart.filter(
      (copyProductCart) => copyProductCart.id !== product.id
    );
    setProductsCart(arrayFiltered);
  }

  const clearAllProductToCart = () => {
    setProductsCart([])
  }

  const totallyCountProductsCart = productsCart.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.count
  }, 0 );

  const totallyPriceProductsCart = productsCart.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.amountPrice
  }, 0 );

  const totallyProductsCart = { count: totallyCountProductsCart, price: totallyPriceProductsCart}
  
  return (
    <CartContext.Provider value={{
      totallyProductsCart,
      productsCart,
      addProductToCart,
      removeProductToCart,
      clearProductToCart,
      clearAllProductToCart,
      getProductsCart,
      isLoading
    }}>
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider }