import { IFood } from "../../models/IFood";
import { ModalContainer } from "../ProductModal/ProductModal.styles";

export type ConfirmModalProps = {
  product?: IFood;
  addToGroceryList: () => void;
  toggleConfirmedModal: () => void;
};

const ConfirmModal = ({
  product,
  addToGroceryList,
  toggleConfirmedModal,
}: ConfirmModalProps) => {
  return (
    <ModalContainer>
      <div>
        <h2>Are you sure you want to add</h2>
        <h1>{product?.title}</h1>
        <button
          onClick={() => {
            addToGroceryList();
            toggleConfirmedModal();
          }}
        >
          Yes
        </button>

        <button onClick={toggleConfirmedModal}>No</button>
      </div>
    </ModalContainer>
  );
};

export default ConfirmModal;
