import Image from "next/image";
import { Icon } from "@iconify/react";
import { ProductType } from "@/types/ProductType";
import { ProductsContainer, ProductItem } from "./styled";
import { formatCurrency } from "@/utils/formatCurrency";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ProductSkeleton } from "./skeleton";
import { addProduct } from "@/store/slices/cart-slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { toast } from "react-toastify";

export const Products = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { data: products, status } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await axios.get<{
        products: ProductType[];
        count: number;
      }>(
        "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC"
      );

      return data.products;
    },
  });

  const handleProduct = (product: ProductType) => {
    dispatch(addProduct(product));
    toast.success("Produto adicionado com sucesso!");
  };

  return (
    <ProductsContainer>
      {status !== "success"
        ? Array(8)
            .fill(1)
            .map((value, index) => <ProductSkeleton key={index} />)
        : products?.map((product) => (
            <ProductItem key={product.id}>
              <div className="image">
                <Image
                  src={product.photo}
                  alt={product.name}
                  fill
                  style={{ objectFit: "contain" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>
              <div className="info">
                <div>
                  <span className="name">{product.name}</span>
                  <span className="price">
                    {formatCurrency(Number(product.price))}
                  </span>
                </div>
                <span className="description">{product.description}</span>
              </div>
              <div className="buyBtn" onClick={() => handleProduct(product)}>
                <Icon icon="mingcute:shopping-bag-3-line" /> Comprar
              </div>
            </ProductItem>
          ))}
    </ProductsContainer>
  );
};
