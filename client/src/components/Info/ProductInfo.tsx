import { useEffect, useState } from "react";
import { IFood } from "../../models/IFood";
import { FavoriteButton, InfoWrapper } from "./Info.styles";

export type InfoProps = {
  toggleModal: () => void;
  product?: IFood;
};

const ProductInfo = ({ toggleModal, product }: InfoProps) => {
  const [isHeartedToggle, setIsHeartedToggle] = useState(false);

  useEffect(() => {
    const hearted = JSON.parse(localStorage.getItem("hearted") || "[]");
    if (hearted.find((item: IFood) => item._id === product?._id)) {
      setIsHeartedToggle(true);
    } else {
      setIsHeartedToggle(false);
    }
  }, [product]);

  const addToFavorites = () => {
    let hearted = JSON.parse(localStorage.getItem("hearted") || "[]");
    hearted.push(product);
    localStorage.setItem("hearted", JSON.stringify(hearted));
    setIsHeartedToggle(true);
  };

  const removeFromFavorites = () => {
    let hearted = JSON.parse(localStorage.getItem("hearted") || "[]");
    const filteredHearted = hearted.filter(
      (item: IFood) => item._id !== product?._id
    );
    localStorage.setItem("hearted", JSON.stringify(filteredHearted));
    setIsHeartedToggle(false);
  };

  return (
    <InfoWrapper>
      <h1>{product?.title}</h1>
      <p>{product?.description}</p>
      <button onClick={toggleModal}>See Recipe</button>

      <FavoriteButton
        onClick={isHeartedToggle ? removeFromFavorites : addToFavorites}
      >
        {" "}
        {isHeartedToggle ? "Remove from favorites" : "Add to favorites"}
      </FavoriteButton>
    </InfoWrapper>
  );
};

export default ProductInfo;
