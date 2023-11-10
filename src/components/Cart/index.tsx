"use client";

import { Icon } from "@iconify/react";
import { CartButton, Checkout, CheckoutBtn, CheckoutItem } from "./styled";
import { AppDispatch, useAppSelector } from "@/store";
import { useState } from "react";
import { formatCurrency } from "@/utils/formatCurrency";
import Image from "next/image";
import { useDispatch } from "react-redux";
import {
  addProduct,
  decreaseProduct,
  removeProduct,
} from "@/store/slices/cart-slice";

export const Cart = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, total } = useAppSelector((state) => state.cartReducer);

  const [showCheckout, setShowCheckout] = useState(false);

  const toggleShowCheckout = () => {
    setShowCheckout(!showCheckout);
  };
  return (
    <>
      <CartButton onClick={toggleShowCheckout}>
        <Icon icon="ph:shopping-cart-fill" width={20} />
        <span className="total">{products.length}</span>
      </CartButton>

      <Checkout $show={showCheckout}>
        <div className="content">
          <div className="header">
            Carrinho de Compras
            <div className="closeBtn" onClick={toggleShowCheckout}>
              X
            </div>
          </div>

          <div className="products">
            {products.map((product) => (
              <CheckoutItem key={product.id}>
                <div
                  className="removeProduct"
                  onClick={() => dispatch(removeProduct(product))}
                >
                  X
                </div>
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
                <span className="name">{product.name}</span>

                <div className="amount">
                  <div className="amountControl">
                    <span className="qtd">Qtd:</span>
                    <div>
                      <span
                        className="decrease"
                        onClick={() => dispatch(decreaseProduct(product))}
                      >
                        -
                      </span>
                      <span>{product.amount}</span>
                      <span
                        className="increase"
                        onClick={() => dispatch(addProduct(product))}
                      >
                        +
                      </span>
                    </div>
                  </div>

                  <span className="total">
                    {formatCurrency(Number(product.price) * product.amount)}
                  </span>
                </div>
              </CheckoutItem>
            ))}
          </div>

          <div className="resume">
            <div>Total:</div>
            <div>{formatCurrency(total)}</div>
          </div>
        </div>
        <CheckoutBtn>Finalizar Compra</CheckoutBtn>
      </Checkout>
    </>
  );
};
