import { useContext } from "react";
import { Link } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ProductContext } from "../../context/ProductContext";
import OrderCard from "../orderCard";
import { totalPrice } from "../../utils/totalPrice";
import "./styles.css";

function CheckoutSideMenu() {
  const context = useContext(ProductContext);
  const date = new Date().toDateString();
  const markIcon= true;
  if (context.isShowCart === false) {
    return <></>;
  }
  const addOrder = () => {
    const newOrder = {
      date: date,
      products: context.shoppingCart,
      totalProducts: context.shoppingCart.length,
      totalPrice: totalPrice(context.shoppingCart),
    };
    if(context.shoppingCart.length === 0 || context.shoppingCart === null){
      return;
    }
    context.setCount(0);
    context.setOrder([...context.order, newOrder]);
    context.setShoppingCart([]);
  };
  return (
    <aside className="product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white text-center overflow-auto">
      <div className="flex justify-between items-center p-6">
        <h1 className="font-medium text-2xl">My Order</h1>
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
        <OrderCard markIcon= {markIcon} card={card} key={index}></OrderCard>
      ))}
      <div className="px-6">
        <p className="flex justify-between items-center">
          <span className="font-light">Total:</span>
          <span className="font-medium text-2xl">
            ${totalPrice(context.shoppingCart)}
          </span>
        </p>
        <br />
        <Link to= "/my-orders/last">
          <button
            className="bg-black py-3 text-white w-full rounded-lg"
            onClick={() => {
              addOrder();
            }}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
}

export default CheckoutSideMenu;
