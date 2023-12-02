import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import Cards from "../../components/cards";
import LayOut from "../../components/layout";
import ProductDetail from "../../components/productDetail";
import SearchBar from "../../components/searchbar";

function Home() {

  const context= useContext(ProductContext);
  

  return (
    <LayOut>
      <SearchBar></SearchBar>
      <Cards></Cards>
      <ProductDetail></ProductDetail>
    </LayOut>
  );
}

export default Home;
