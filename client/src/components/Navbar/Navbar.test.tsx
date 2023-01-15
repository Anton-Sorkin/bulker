import React from "react";
import { render } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should render the Navbar component", () => {
    const { getByText } = render(<Navbar />);
    expect(getByText("BULKER")).toBeInTheDocument();
  });

  it("should render the amount of products in the grocery list", () => {
    localStorage.setItem(
      "groceryList",
      JSON.stringify([{ _id: 1 }, { _id: 2 }])
    );
    const { getByText } = render(<Navbar />);
    expect(getByText("2")).toBeInTheDocument();
  });

  it("should render the amount of hearted products", () => {
    localStorage.setItem("hearted", JSON.stringify([{ _id: 1 }, { _id: 2 }]));
    const { getByText } = render(<Navbar />);
    expect(getByText("2")).toBeInTheDocument();
  });
});
