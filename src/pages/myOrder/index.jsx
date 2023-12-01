import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import LayOut from "../../components/layout";
import OrderCard from "../../components/orderCard";

function MyOrder() {
  const context = useContext(ProductContext);
  const markIcon = false;
  const order = context.order;
  let lastOrder = order.slice(-1)[0];
  if (order.length === 0 || order === undefined) {
    return <h1>No hay ordenes</h1>;
  }
  const params = useParams();
  params.id= parseInt(params.id);
  if (params.id > 0) {
    const productToShow = order.find((order) => order.id === params.id);
    lastOrder= productToShow;
  }

  return (
    <LayOut>
      <br />
      <div className="flex items-center justify-center relative w-80 mb-6">
        <Link className="absolute left-0" to="/my-orders">
          <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer"></ChevronLeftIcon>
        </Link>
        <h1>My Order</h1>
      </div>
      <div className="px-6 overflow-y-scroll flex-1 mt-4">
        {lastOrder.products.map((product, i) => (
          <OrderCard key={i} card={product} markIcon={markIcon}></OrderCard>
        ))}
      </div>
      <h1>Total Price: {lastOrder.totalPrice}</h1>
    </LayOut>
  );
}

export default MyOrder;
