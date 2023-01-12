import { AddToCardWrapper } from "./AddToCart.styles";

type AddToCartProps = {
  isSetToGroceryList: boolean;
  addToGroceryList: () => void;
  toggleConfirmedModal: () => void;
};

const AddToCart = ({
  isSetToGroceryList,
  addToGroceryList,
  toggleConfirmedModal,
}: AddToCartProps) => {
  return (
    <AddToCardWrapper>
      {isSetToGroceryList === false && (
        <button onClick={addToGroceryList}>Add to Grocery List</button>
      )}

      {isSetToGroceryList === true && (
        <>
          <button onClick={toggleConfirmedModal}>
            Add Another Grocery List
          </button>
          <p>it has now been added to your cart!</p>
        </>
      )}
    </AddToCardWrapper>
  );
};

export default AddToCart;
