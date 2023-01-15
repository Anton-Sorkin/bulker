import { useEffect, useState } from "react";
import { Set } from "immutable";
import { IFood } from "../../../models/IFood";
import Footer from "../../Footer/Footer";
import IngredientCard from "../../IngredientCard/IngredientCard";
import Navbar from "../../Navbar/Navbar";
import Options from "../../Options/Options";
import {
  AllIngredientsWrapper,
  CompContainer,
  EmptyWrapper,
  GroceryListContainer,
} from "./GroceryList.styles";

const GroceryList = () => {
  const [groceryList, setGroceryList] = useState<IFood[]>([]);
  const [ingredients, setIngredients] = useState<string[]>([]);

  const [clickedIngredients, setClickedIngredients] = useState<Set<number>>(
    Set()
  );

  const ingredientCounts = ingredients.reduce((acc, ingredient) => {
    if (acc[ingredient]) {
      acc[ingredient] += 1;
    } else {
      acc[ingredient] = 1;
    }
    return acc;
  }, {} as { [key: string]: number });

  const uniqueIngredients = Object.entries(ingredientCounts).map(
    ([ingredient, count]) => {
      return count > 1 ? `${ingredient} (${count})` : ingredient;
    }
  );

  const getGroceryList = () => {
    const groceryList = JSON.parse(localStorage.getItem("groceryList") || "[]");
    setGroceryList(groceryList);
  };

  useEffect(() => {
    const ingredients = groceryList
      .map((product) => product.ingredients)
      .flat();
    setIngredients(ingredients);
  }, [groceryList]);

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

      <CompContainer>
        <AllIngredientsWrapper>
          {uniqueIngredients.length === 0 ? (
            <EmptyWrapper>
              <h1>No ingredients yet</h1>
            </EmptyWrapper>
          ) : (
            <>
              <h1>Ingredients</h1>
              <p>Click on an ingredient to mark it</p>
              <ul>
                {uniqueIngredients.map((ingredient, index) => (
                  <li
                    key={index}
                    style={{
                      textDecoration: clickedIngredients.has(index)
                        ? "line-through"
                        : "none",
                    }}
                    onClick={() => {
                      clickedIngredients.has(index)
                        ? setClickedIngredients(
                            clickedIngredients.remove(index)
                          )
                        : setClickedIngredients(clickedIngredients.add(index));
                    }}
                  >
                    {ingredient}
                  </li>
                ))}
              </ul>
            </>
          )}
        </AllIngredientsWrapper>
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
