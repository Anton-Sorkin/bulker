import { IFood } from "../../models/IFood";

type SimilarProductsProps = {
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
    <>
      <h1>You might also like</h1>
      <ul>
        {similarProducts?.map((product) => (
          <li>
            <img src={product.img} alt={product.title} />
            <p>{product.title}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SimilarProducts;
