import { IFood } from "../../models/IFood";
import { IngredientWrapper } from "./IngredientCard.styles";

export type IngredientCardProps = {
  product: IFood;
  getGroceryList: () => void;
  groceryList: IFood[];
};

const IngredientCard = ({
  product,
  getGroceryList,
  groceryList,
}: IngredientCardProps) => {
  return (
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
  );
};

export default IngredientCard;
