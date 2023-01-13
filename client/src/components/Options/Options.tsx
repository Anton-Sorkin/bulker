import { Link } from "react-router-dom";
import { OptionsWrapper } from "./Options.styles";

type OptionsProps = {
  getGroceryList: () => void;
};

const Options = ({ getGroceryList }: OptionsProps) => {
  return (
    <OptionsWrapper>
      <h1>Options</h1>
      <div>
        <button
          onClick={() => {
            localStorage.removeItem("groceryList");
            getGroceryList();
          }}
        >
          Delete all
        </button>

        <Link to="/">
          <button>Back to home</button>
        </Link>
      </div>
    </OptionsWrapper>
  );
};

export default Options;
