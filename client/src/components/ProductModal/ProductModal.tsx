import { IFood } from "../../models/IFood";
import { ModalContainer } from "./ProductModal.styles";

export type ProductModalProps = {
  toggleModal: () => void;
  product?: IFood;
};

const ProdcutModal = ({ toggleModal, product }: ProductModalProps) => {
  return (
    <ModalContainer>
      <div>
        <h1>{product?.title}</h1>
        <h2>Ingredients</h2>
        <li>
          {product?.ingredients.map((ingredient, index) => (
            <p key={index}>{ingredient}</p>
          ))}
        </li>
        <button onClick={toggleModal}>Close</button>
      </div>
    </ModalContainer>
  );
};

export default ProdcutModal;
