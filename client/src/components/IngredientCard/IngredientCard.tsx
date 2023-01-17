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
  const handleDelete = () => {
    const index = groceryList.findIndex(
      (groceryProduct) => groceryProduct._id === product._id
    );
    if (index !== -1) {
      groceryList.splice(index, 1);
      localStorage.setItem("groceryList", JSON.stringify(groceryList));
      getGroceryList();
    }
  };

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

      <button onClick={handleDelete}>Delete</button>
    </IngredientWrapper>
  );
};

export default IngredientCard;
