import { useState, useEffect } from "react";
import LayOut from "../layout";
import Card from "../card";

function Cards() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setCards(data));
  }, []);

  if (cards.length === 0 || cards === null) {
    return <h1>No hay productos :/</h1>;
  }
  return (
    <LayOut>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {cards.map((card, index) => (
          <Card card={card} key={index}></Card>
        ))}
      </div>
    </LayOut>
  );
}

export default Cards;
