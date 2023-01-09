import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IFood } from "../../../models/IFood";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import {
  CompContainer,
  GroceryListContainer,
  IngredientWrapper,
  Options,
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
        <Options>
          <button
            onClick={() => {
              localStorage.removeItem("groceryList");
              getGroceryList();
            }}
          >
            Delete all
          </button>

          <Link to="/">
            <button>Back to home</button>
          </Link>
        </Options>
      </CompContainer>

      {groceryList.map((product) => (
        <CompContainer key={product._id}>
          <IngredientWrapper>
            <div>
              <h3>{product.title}</h3>

              <ul>
                {product.ingredients.map((ingredient, i) => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => {
                const filteredGroceryList = groceryList.filter(
                  (groceryProduct) => groceryProduct._id !== product._id
                );
                localStorage.setItem(
                  "groceryList",
                  JSON.stringify(filteredGroceryList)
                );
                getGroceryList();
              }}
            >
              Delete
            </button>
          </IngredientWrapper>
        </CompContainer>
      ))}
      <CompContainer>
        <Footer />
      </CompContainer>
    </GroceryListContainer>
  );
};

export default GroceryList;
