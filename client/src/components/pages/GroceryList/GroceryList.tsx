import { useEffect, useState } from "react";

import { IFood } from "../../../models/IFood";
import Footer from "../../Footer/Footer";
import IngredientCard from "../../IngredientCard/IngredientCard";
import Navbar from "../../Navbar/Navbar";
import Options from "../../Options/Options";
import {
  CompContainer,
  EmptyWrapper,
  GroceryListContainer,
} from "./GroceryList.styles";

const GroceryList = () => {
  const [groceryList, setGroceryList] = useState<IFood[]>([]);

  const getGroceryList = () => {
    const groceryList = JSON.parse(localStorage.getItem("groceryList") || "[]");
    setGroceryList(groceryList);
  };

  useEffect(() => {
    getGroceryList();
  }, []);

  return (
    <GroceryListContainer>
      <CompContainer>
        <Navbar />
      </CompContainer>

      <CompContainer>
        <Options getGroceryList={getGroceryList} />
      </CompContainer>
      {groceryList.length === 0 && (
        <CompContainer>
          <EmptyWrapper>
            <h1>Your grocery list is empty</h1>
          </EmptyWrapper>
        </CompContainer>
      )}

      {groceryList.map((product) => (
        <CompContainer key={product._id}>
          <IngredientCard
            product={product}
            getGroceryList={getGroceryList}
            groceryList={groceryList}
          />
        </CompContainer>
      ))}
      <CompContainer>
        <Footer />
      </CompContainer>
    </GroceryListContainer>
  );
};

export default GroceryList;
