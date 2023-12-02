import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";

function SearchBar() {
  const context= useContext(ProductContext);

  return (
    <>

      <div className="flex items-center justify-center relative w-80 mt-6">
        <h1 className=" text-xl">Search Products</h1>
      </div>
      <input
        type="text"
        placeholder="Search a product"
        className="rounded-lg border border-black w-90 p-2 focus:outline-none mt-3"
        onChange={(e) => {
          context.setTitle(e.target.value);
          console.log(context.title);
        }}
      ></input>
    </>
  );
}

export default SearchBar;
