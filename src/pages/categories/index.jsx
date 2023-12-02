import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Cards from "../../components/cards";
import LayOut from "../../components/layout";
import SearchBar from "../../components/searchbar";
import { ProductContext } from "../../context/ProductContext";

function Categories() {
  const context = useContext(ProductContext);
  let { id } = useParams();
  id = parseInt(id);
  useEffect(() => {
    context.filterByCategory(id);
  }, []);
  console.log(id);
  return (
    <LayOut>
      <SearchBar></SearchBar>
      <Cards id={id} filtered= {context.filteredByCategory}></Cards>
    </LayOut>
  );
}

export default Categories;
