import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import { PlusCircleIcon } from "@heroicons/react/24/solid";

function Card(props) {
  const card = props.card;
  const context = useContext(ProductContext);
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
            onClick={(e) => {
              e.preventDefault();
              context.setProductDetail();
              context.showProduct(card);              
            }}
          ></img>
          <div className="absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1">
            <button
              onClick={() => {
                context.setCount(context.count + 1);
              }}
            >
              <PlusCircleIcon className="h-6 w-6 text-white text-lg"></PlusCircleIcon>
            </button>
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
