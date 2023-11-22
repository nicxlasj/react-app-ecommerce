import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ProductContext } from "../../context/ProductContext";
import OrderCard from "../orderCard";
import "./styles.css";

function CheckoutSideMenu() {
  const context = useContext(ProductContext);
  if (context.isShowCart === false) {
    return <></>;
  }
  return (
    <aside className="product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white text-center">
      <div className="flex justify-between items-center p-6">
        <h1 className="font-bold">Your products</h1>
        <h3>
          <button
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              context.setShowCart();
            }}
          >
            <XMarkIcon className="h-6 w-6 text-lg cursor-pointer"></XMarkIcon>
          </button>
        </h3>
      </div>
      {context.shoppingCart.map((card, index) => (
        <OrderCard card={card} key={index}></OrderCard>
      ))}
    </aside>
  );
}

export default CheckoutSideMenu;
