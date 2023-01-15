import React from "react";
import { render, fireEvent } from "@testing-library/react";
import IngredientCard, { IngredientCardProps } from "./IngredientCard";
import { IFood } from "../../models/IFood";

describe("IngredientCard", () => {
  let props: IngredientCardProps;
  let product: IFood;
  let groceryList: IFood[];

  beforeEach(() => {
    product = {
      title: "Apple",
      ingredients: ["1 Apple", "1 tablespoon sugar", "1 teaspoon cinnamon"],
      _id: "1",
      img: "https://www.google.com",
      description: "A delicious apple",
      category: "fruit",
      filter: "fruit",
      id: "1",
    };

    groceryList = [product];
    localStorage.setItem("groceryList", JSON.stringify(groceryList));

    props = {
      product: product,
      getGroceryList: jest.fn(),
      groceryList: groceryList,
    };
  });

  it("should render the product title and ingredients", () => {
    const { getByText } = render(<IngredientCard {...props} />);
    expect(getByText("Apple")).toBeInTheDocument();
    expect(getByText("1 Apple")).toBeInTheDocument();
    expect(getByText("1 tablespoon sugar")).toBeInTheDocument();
    expect(getByText("1 teaspoon cinnamon")).toBeInTheDocument();
  });

  it("should remove the product from the grocery list and update local storage when clicking the delete button", () => {
    const { getByText } = render(<IngredientCard {...props} />);
    const deleteButton = getByText("Delete");
    fireEvent.click(deleteButton);
    expect(props.getGroceryList).toHaveBeenCalled();
    expect(JSON.parse(localStorage.getItem("groceryList") || "[]")).toEqual([]);
  });
});
