import { createContext } from "react";
import { useState, useEffect } from "react";


export const ProductContext = createContext();

function ProductContextProvider(props) {
  const [cards, setCards] = useState([]);
  const [count, setCount]= useState(0);
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setCards(data));
  }, []);

  console.log(cards);
  return <ProductContext.Provider value={{
    cards,
    count,
    setCount
  }}>
    {props.children}
  </ProductContext.Provider>;
}

export default ProductContextProvider;
