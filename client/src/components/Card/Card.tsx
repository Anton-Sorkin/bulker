import React from "react";

import { CardContainer } from "./Card.styles";

export type CardProps = {
  img: string;
  title: string;
};

const Card: React.FC<CardProps> = ({ img, title }) => {
  return (
    <CardContainer>
      <img src={img} alt={title} />

      <h1>{title}</h1>
    </CardContainer>
  );
};

export default Card;
