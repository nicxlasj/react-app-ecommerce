import { useContext } from "react";
import LayOut from "../layout";
import { ProductContext } from "../../context/ProductContext";
import Card from "../card";

function Cards(props) {
  const context = useContext(ProductContext);
  const cards = context.cards;
  const renderProducts = () => {
    if (props.id) {
      if (context.filteredItems.length === 0) {
        return (
          <LayOut>
            <h1 className="text-center font-medium">
              We didn't found this product :(
            </h1>
          </LayOut>
        );
      }
      if (context.filteredItems.length < context.cards.length) {
        return context.filteredItems.map((card, index) => (
          <Card card={card} key={index}></Card>
          ));
        }
        
        if (context.title === "") {
          console.log("I'm here");
          console.log(props.filtered);
          return props.filtered.map((card, index) => (
            <Card card={card} key={index}></Card>
          ));
        }
      return props.filtered.map((card, index) => (
      <Card card={card} key={index}></Card>
      ));
      
    }
    if (context.filteredItems.length === 0) {
      return (
        <LayOut>
          <h1 className="text-center font-medium">
            We didn't found this product :(
          </h1>
        </LayOut>
      );
    }
    if (context.title === "") {
      return context.cards.map((card, index) => (
        <Card card={card} key={index}></Card>
      ));
    }
    if (context.filteredItems.length < context.cards.length) {
      return context.filteredItems.map((card, index) => (
        <Card card={card} key={index}></Card>
      ));
    }
  };

  if (cards.length === 0 || cards === null) {
    return <h1>No hay productos :/</h1>;
  }
  return (
    <LayOut>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {renderProducts()}
      </div>
    </LayOut>
  );
}

export default Cards;
