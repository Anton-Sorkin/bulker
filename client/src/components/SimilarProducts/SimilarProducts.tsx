import { Link } from "react-router-dom";
import { IFood } from "../../models/IFood";
import Card from "../Card/Card";
import { SimilarProductsWrapper } from "./SimilarProducts.styles";

export type SimilarProductsProps = {
  productId?: string;
  backendData?: IFood[];
  category?: string;
};

const SimilarProducts = ({
  productId,
  backendData,
  category,
}: SimilarProductsProps) => {
  const similarProducts = backendData?.filter(
    (product) => product._id !== productId && product.category === category
  );
  return (
    <SimilarProductsWrapper>
      <h1>You might also like</h1>
      <div>
        {similarProducts?.map((product) => (
          <Link key={product._id} to={`/product/${product._id}`}>
            <Card img={product.img} title={product.title} />
          </Link>
        ))}
      </div>
    </SimilarProductsWrapper>
  );
};

export default SimilarProducts;
