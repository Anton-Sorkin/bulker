import { IFood } from "../../models/IFood";
import { InfoWrapper } from "./Info.styles";

type InfoProps = {
  toggleModal: () => void;
  product: IFood;
};

const SwiperInfo = ({ toggleModal, product }: InfoProps) => {
  return (
    <InfoWrapper>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <button onClick={toggleModal}>See Recipe</button>
    </InfoWrapper>
  );
};

export default SwiperInfo;
