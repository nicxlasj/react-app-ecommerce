import { createContext } from "react";
import { useState, useEffect } from "react";
import ProductDetail from "../components/productDetail";

export const ProductContext = createContext();

function ProductContextProvider(props) {
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setCards(data));
  }, []);
  const [cards, setCards] = useState([]);
  const [count, setCount] = useState(0);
  const [isProductDetail, setIsProductDetail] = useState(false);
  const [productToShow, setProductToShow] = useState({});
  const [shoppingCart, setShoppingCart]= useState([]);
  const setProductDetail = () => {
    setIsProductDetail(!isProductDetail);
  };
  const showProduct= (card)=> {
    setProductToShow(card);
  }

  return (
    <ProductContext.Provider
      value={{
        cards,
        count,
        setCount,
        setProductDetail,
        isProductDetail,
        productToShow,
        setProductToShow,
        showProduct,
        shoppingCart,
        setShoppingCart
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
}

export default ProductContextProvider;
