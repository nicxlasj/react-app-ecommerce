function OrdersCard(props) {
  return (
    <div className="flex justify-between items-center mb-3 border border-black mt-20">
        <p>
            <span>{props.date}</span>
            <span>{props.totalPrice}</span>
            <span>{props.totalProducts}</span>
        </p>
    </div>
  );
}
export default OrdersCard;
