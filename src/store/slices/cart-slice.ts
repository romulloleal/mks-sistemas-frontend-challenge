import { ProductType } from "@/types/ProductType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Product = ProductType & {
  amount: number;
};

type InitialState = {
  products: Product[];
  total: number;
};

const initialState = {
  products: [],
  total: 0,
} as InitialState;

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ProductType>) => {
      const selectedProduct = action.payload;
      const products = state.products;

      const findProduct = products.find(
        (product) => product.id === selectedProduct.id
      );

      if (findProduct) {
        state.products = products.map((product) => {
          if (product.id === selectedProduct.id) {
            return {
              ...product,
              amount: product.amount + 1,
            };
          }
          return product;
        });
      } else {
        state.products = [...products, { ...selectedProduct, amount: 1 }];
      }

      state.total += Number(selectedProduct.price);
    },
    decreaseProduct: (state, action: PayloadAction<ProductType>) => {
      const selectedProduct = action.payload;
      const products = state.products;

      const findProduct = products.find(
        (product) => product.id === selectedProduct.id
      );

      if (findProduct && findProduct?.amount > 1) {
        state.products = products.map((product) => {
          if (product.id === selectedProduct.id) {
            return {
              ...product,
              amount: product.amount - 1,
            };
          }
          return product;
        });
      } else {
        state.products = [
          ...products.filter((product) => product.id !== selectedProduct.id),
        ];
      }

      state.total -= Number(selectedProduct.price);
    },
    removeProduct: (state, action: PayloadAction<ProductType>) => {
      const selectedProduct = action.payload;
      const products = state.products;

      const findProduct = products.find(
        (product) => product.id === selectedProduct.id
      );

      if (findProduct) {
        state.total -= Number(findProduct.price) * findProduct.amount;

        state.products = [
          ...products.filter((product) => product.id !== selectedProduct.id),
        ];
      }
    },
  },
});

export const { addProduct, decreaseProduct, removeProduct } = cart.actions;
export default cart.reducer;
