import React from "react";
import { render, screen } from "@testing-library/react";
import Card, { CardProps } from "./Card";

describe("Card component", () => {
  test("should render correctly with given props", () => {
    const props: CardProps = {
      img: "image.jpg",
      title: "example title",
    };
    render(<Card {...props} />);

    expect(screen.getByAltText(props.title)).toBeInTheDocument();
    expect(screen.getByText(props.title)).toBeInTheDocument();
  });
});
