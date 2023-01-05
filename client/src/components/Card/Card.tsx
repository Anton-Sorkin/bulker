import React from "react";

import { CardContainer } from "./Card.styles";

type CardProps = {
  img: string;
  title: string;
  key: string;
};

const Card: React.FC<CardProps> = ({ img, title, key }) => {
  return (
    <CardContainer>
      <img src={img} alt={title} />
      <h1>{title}</h1>
    </CardContainer>
  );
};

export default Card;
