import { Link } from "react-router-dom";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";

function OrdersCard(props) {
  return (
    <div className="flex justify-between mb-4 gap-8 font-light">
      <ShoppingBagIcon className="h-6 w-6 text-black"></ShoppingBagIcon>
      <h3>{props.totalProducts}</h3>
      <CurrencyDollarIcon className="h-6 w-6 text-black"></CurrencyDollarIcon>
      <h3>{props.totalPrice}</h3>
      <CalendarDaysIcon className="h-6 w-6 text-black"></CalendarDaysIcon>
      <h3>{props.date}</h3>
      <Link to={"/my-orders/" + props.id}>
        <ChevronRightIcon className="h-6 w-6 text-black cursor-pointer"></ChevronRightIcon>
      </Link>
    </div>
  );
}
export default OrdersCard;
