import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { ProductItem } from "./styled";

export const ProductSkeleton = () => {
  return (
    <ProductItem>
      <div className="image">
        <Skeleton height={150} />
      </div>
      <div className="info">
        <Skeleton count={4} height={5} />
      </div>
    </ProductItem>
  );
};
