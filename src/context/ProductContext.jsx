import { createContext } from "react";
import { useState, useEffect } from "react";

export const ProductContext = createContext();

function ProductContextProvider(props) {
  // Obteniendo datos de la API

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setCards(data));
  }, []);

  // Declarando el state de las cards

  const [cards, setCards] = useState([]);

  // Declarando el state del conteo

  const [count, setCount] = useState(0);

  // Booleano para mostrar el productDetail

  const [isProductDetail, setIsProductDetail] = useState(false);

  // Booleano para el cart

  const [isShowCart, setIsShowCart] = useState(false);

  // Producto a mostrar en el product Detail

  const [productToShow, setProductToShow] = useState({});

  // Declarando el state del Carrito

  const [shoppingCart, setShoppingCart] = useState([]);

  // Declarando state para el link de checkout

  const [isProductInCart, setIsProductInCart] = useState(false);

  // Declarando state de orden

  const [order, setOrder]= useState([]);

  const setProductDetail = () => {
    setIsProductDetail(!isProductDetail);
  };

  const setShowCart = () => {
    setIsShowCart(!isShowCart);
  };

  const showProduct = (card) => {
    setProductToShow(card);
  };

  const setProductInCart = () => {
    setIsProductInCart(true);
  };

  const removeProductToCart = (card) => {
    setShoppingCart(shoppingCart.filter((product)=> product.id !== card.id));
    const found= cards.find((val)=> val.id === card.id);
    setCount(count-1);
    found.isInCart= false;
  };

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
        setShoppingCart,
        setShowCart,
        isShowCart,
        setProductInCart,
        isProductInCart,
        removeProductToCart,
        order,
        setOrder
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
}

export default ProductContextProvider;
