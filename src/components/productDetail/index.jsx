import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ProductContext } from "../../context/ProductContext";
import "./styles.css";

function ProductDetail() {
  const context = useContext(ProductContext);
  if (context.isProductDetail === false) {
    return <></>;
  }
  return (
    <aside className="product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white text-center">
      <div className="flex justify-between items-center p-6">
        <h1 className="font-bold">{context.productToShow.title}</h1>
        <h3>
          <button
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              context.setProductDetail();
            }}
          >
            <XMarkIcon className="h-6 w-6 text-lg cursor-pointer"></XMarkIcon>
          </button>
        </h3>
      </div>
      <figure className="px-6">
        <img
          src={context.productToShow.images[0]}
          className="w-full h-full rounded-xl'"
        ></img>
      </figure>
      <h1 className="text-center font-bold">${context.productToShow.price}</h1>

        <div className="text-center m-2 font-normal">
          <p>{context.productToShow.description}</p>
        </div>
    </aside>
  );
}

export default ProductDetail;
