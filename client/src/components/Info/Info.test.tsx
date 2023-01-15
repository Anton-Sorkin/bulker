import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ProductInfo, { InfoProps } from "./ProductInfo";
import { IFood } from "../../models/IFood";

describe("ProductInfo", () => {
  let props: InfoProps;
  let product: IFood;

  beforeEach(() => {
    product = {
      title: "Apple",
      description: "A tasty fruit",
      _id: "1",
      img: "https://www.google.com",
      ingredients: ["1 Apple", "1 tablespoon sugar", "1 teaspoon cinnamon"],
      category: "fruit",
      filter: "fruit",
      id: "1",
    };
    props = {
      toggleModal: jest.fn(),
      product: product,
    };
    localStorage.clear();
  });

  it("should render the product title and description", () => {
    const { getByText } = render(<ProductInfo {...props} />);
    expect(getByText("Apple")).toBeInTheDocument();
    expect(getByText("A tasty fruit")).toBeInTheDocument();
  });

  it('should call toggleModal when clicking the "See Recipe" button', () => {
    const { getByText } = render(<ProductInfo {...props} />);
    const seeRecipeButton = getByText("See Recipe");
    fireEvent.click(seeRecipeButton);
    expect(props.toggleModal).toHaveBeenCalled();
  });

  it('should add product to favorites and change the text of the button when clicking the "Add to favorites" button', () => {
    const { getByText } = render(<ProductInfo {...props} />);
    const addToFavoritesButton = getByText("Add to favorites");
    fireEvent.click(addToFavoritesButton);
    expect(JSON.parse(localStorage.getItem("hearted") as string)).toEqual([
      product,
    ]);
    expect(addToFavoritesButton).toHaveTextContent("Remove from favorites");
  });

  it('should remove product from favorites and change the text of the button when clicking the "Remove from favorites" button', () => {
    localStorage.setItem("hearted", JSON.stringify([product]));
    const { getByText } = render(<ProductInfo {...props} />);
    const removeFromFavoritesButton = getByText("Remove from favorites");
    fireEvent.click(removeFromFavoritesButton);
    expect(JSON.parse(localStorage.getItem("hearted") as string)).toEqual([]);
    expect(removeFromFavoritesButton).toHaveTextContent("Add to favorites");
  });
});
