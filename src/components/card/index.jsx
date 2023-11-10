function Card(props) {
  const card = props.card;
  return (
    <div className="grid grid-cols-3 gap-2">
      <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
        <figure className="relative mb-2 w-full h-4/5">
          <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
            {card.category.name}
          </span>
          <img
            className="w-full h-full object-cover rounded-lg"
            src={card.images[0]}
            alt="product"
          ></img>
          <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1">
            +
          </div>
        </figure>
        <p className="flex justify-between">
          <span className="text-sm font-light">{card.title}</span>
          <span className="text-lg font-medium">{card.price}$</span>
        </p>
      </div>
    </div>
  );
}
export default Card;
