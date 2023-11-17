import { useState, useEffect } from "react";
import { useContext } from "react";
import LayOut from "../layout";
import { ProductContext } from "../../context/ProductContext";
import Card from "../card";

function Cards() {
  const context = useContext(ProductContext);
  console.log(context);
  const cards = context.cards;

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
