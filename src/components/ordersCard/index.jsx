function OrdersCard(props) {
  const card= props.card;
  return (
    <div className="flex justify-between items-center mb-3">
      <div className='flex items-center gap-2'>
        <figure className='w-20 h-20'>
          <img className='w-full h-full rounded-lg object-cover' src={card.images[0]} alt={card.title} />
        </figure>
        <p className='text-sm font-light'>{card.title}</p>
      </div>
      <div className='flex items-center gap-2'>
        <p className='text-lg font-medium'>{card.price}</p>
      </div>
    </div>
  );
}
export default OrdersCard;
