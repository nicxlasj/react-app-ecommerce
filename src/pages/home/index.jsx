import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import Cards from "../../components/cards";
import LayOut from "../../components/layout";
import ProductDetail from "../../components/productDetail";

function Home() {

  const context= useContext(ProductContext);
  

  return (
    <LayOut>
      <div className="flex items-center justify-center relative w-80 mt-6">
        <h1 className=" text-xl">Search Products</h1>
      </div>
      <input     
        type="text"
        placeholder="Search a product"
        className="rounded-lg border border-black w-90 p-2 focus:outline-none mt-3"
        onChange={(e)=> {
          context.setTitle(e.target.value);
        }}
      ></input>
      <Cards></Cards>
      <ProductDetail></ProductDetail>
    </LayOut>
  );
}

export default Home;
