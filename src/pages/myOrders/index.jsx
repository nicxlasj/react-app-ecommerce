import { useContext } from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import OrdersCard from "../../components/ordersCard";
import { ProductContext } from "../../context/ProductContext";
import LayOut from "../../components/layout";

function MyOrders() {
  const context = useContext(ProductContext);
  return (
    <LayOut>
      <br />
      <div className="flex items-center justify-center relative w-80 mb-6">
        <Link className="absolute left-0" to= "/my-order">
          <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer"></ChevronLeftIcon>
        </Link>
        <h1>My Orders</h1>
      </div>
      <div>
        {context.order.map((order, i)=> (
          <OrdersCard key={i} totalPrice= {order.totalPrice} totalProducts= {order.totalProducts} date={order.date} id= {order.id}></OrdersCard>
        ))}
      </div>
    </LayOut>
  );
}

export default MyOrders;
