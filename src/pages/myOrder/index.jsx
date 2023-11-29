import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import LayOut from "../../components/layout";
import OrderCard from "../../components/orderCard";

function MyOrder() {
  const context = useContext(ProductContext);
  const markIcon = false;
  const order = context.order;
  const lastOrder = order.slice(-1)[0];
  console.log(lastOrder);

  return (
    <LayOut>
        <br />
      <h1>My Order</h1>
      <div className="px-6 overflow-y-scroll flex-1 mt-4">
        {lastOrder.products.map((product, i) => (
          <OrderCard key={i} card={product} markIcon={markIcon}></OrderCard>
        ))}
      </div>
    </LayOut>
  );
}

export default MyOrder;
