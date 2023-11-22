import { XMarkIcon } from "@heroicons/react/24/solid";

function OrderCard(props) {
  const card = props.card;
  return (
    <div className="flex justify-between items-center mb-3 ml-2">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            src={card?.images[0]}
            alt=""
            className="w-full h-full rounded-lg object-cover"
          ></img>
        </figure>
        <p className="text-sm font-light">{card.title}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg font-medium">${card.price}</p>
        <XMarkIcon className="h-6 w-6 text-lg cursor-pointer"></XMarkIcon>
      </div>
    </div>
  );
}

export default OrderCard;
