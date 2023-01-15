import { render } from "@testing-library/react";
import { IFood } from "../../models/IFood";
import SimilarProducts, { SimilarProductsProps } from "./SimilarProducts";

describe("SimilarProducts", () => {
  let wrapper: React.ReactElement;
  let backendData: IFood[];
  let productId: string;
  let category: string;

  beforeEach(() => {
    productId = "1";
    category = "pizza";
    backendData = [
      {
        title: "Pizza",
        ingredients: ["Dough", "Tomato Sauce", "Cheese"],
        _id: "1",
        img: "https://www.google.com",
        description: "A delicious pizza",
        category: "pizza",
        filter: "pizza",
        id: "1",
      },
      {
        title: "Hamburger",
        ingredients: ["Bun", "Beef", "Cheese"],
        _id: "2",
        img: "https://www.google.com",
        description: "A delicious hamburger",
        category: "burger",
        filter: "burger",
        id: "2",
      },
    ];

    wrapper = (
      <SimilarProducts
        productId={productId}
        backendData={backendData}
        category={category}
      />
    );
  });

  it("should render the title", () => {
    const { getByText } = render(wrapper);
    expect(getByText("You might also like")).toBeInTheDocument();
  });
});
