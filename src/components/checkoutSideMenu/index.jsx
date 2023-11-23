import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ProductContext } from "../../context/ProductContext";
import OrderCard from "../orderCard";
import { totalPrice } from "../../utils/totalPrice";
import "./styles.css";

function CheckoutSideMenu() {
  const context = useContext(ProductContext);
  if (context.isShowCart === false) {
    return <></>;
  }
  return (
    <aside className="product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white text-center overflow-auto">
      <div className="flex justify-between items-center p-6">
        <h1 className="font-normal text-xl">My Order</h1>
        <h3>
          <button
            onClick={() => {
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
      <div className="mb-6">
        <h1 className="text-xl font-semibold">
          Total: ${totalPrice(context.shoppingCart)}
        </h1>
      </div>
    </aside>
  );
}

export default CheckoutSideMenu;
