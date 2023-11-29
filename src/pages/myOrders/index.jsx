import { useContext } from "react";
import OrdersCard from "../../components/ordersCard";
import { ProductContext } from "../../context/ProductContext";
import LayOut from "../../components/layout";

function MyOrders() {
  const context = useContext(ProductContext);
  console.log(context.order);
  return (
    <LayOut>
      <div>
        {context.order.map((element, i) => (
          <OrdersCard
            key= {i}
            date={element.date}
            totalPrice={element.totalPrice}
            totalProducts={element.totalProducts}
          ></OrdersCard>
        ))}
      </div>
    </LayOut>
  );
}

export default MyOrders;
