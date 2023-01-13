import { NextSwipeWrapper } from "./NextSwipe.styles";

type NextSwipeProps = {
  handleNextProduct: () => void;
  handleAddAndNextProduct: () => void;
};

const NextSwipe = ({
  handleNextProduct,
  handleAddAndNextProduct,
}: NextSwipeProps) => {
  return (
    <NextSwipeWrapper>
      <div>
        <button onClick={handleNextProduct}>Next product</button>
      </div>
      <button onClick={handleAddAndNextProduct}>Add it and next product</button>
    </NextSwipeWrapper>
  );
};

export default NextSwipe;
