import { useState, useEffect } from "react";
import LayOut from "../layout";
import Card from "../card";

function Cards() {
  const [cards, setCards] = useState([]);
  fetch("https://api.escuelajs.co/api/v1/products")
    .then((response) => response.json())
    .then((data) => setCards(data));
  if (cards.length === 0 || cards === null) {
    return <h1>No hay productos :/</h1>;
  }
  return cards.map((card, index) => (
    <LayOut>
      <div className="grid grid-cols-4 gap-2">
          <Card card={card} key= {index}></Card>
      </div>
    </LayOut>
  ));
}

export default Cards;
