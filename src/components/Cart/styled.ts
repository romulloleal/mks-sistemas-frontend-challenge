"use client";
import styled from "styled-components";

export const CartButton = styled.div`
  background-color: white;
  color: black;
  width: 90px;
  height: 45px;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  flex-direction: row;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
`;

export const Checkout = styled.div<{ $show: boolean }>`
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: var(--blue);
  color: white;
  font-weight: 700;
  width: 85%;
  ${({ $show }) => ($show ? "margin-right: 0;" : "margin-right: -85%;")}
  z-index: 2;
  box-shadow: -5px 0px 6px 0px #00000021;
  transition: all 0.5s ease;

  @media (min-width: 600px) {
    width: 480px;
    ${({ $show }) => ($show ? "margin-right: 0;" : "margin-right: -480px;")}
  }

  & .content {
    width: 90%;
    margin-top: 20px;
    position: relative;
    display: flex;
    height: calc(100% - 100px);
    flex-direction: column;

    & .header {
      width: 100%;
      font-size: 1.5rem;
      display: flex;
      justify-content: space-between;
    }

    & .resume {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    & .products {
      overflow-x: hidden;
      padding: 10px;
      flex-grow: 1;
      margin: 10px 0;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 10px;

      &::-webkit-scrollbar {
        width: 5px;
      }

      &::-webkit-scrollbar-track {
        background: transparent;
      }

      &::-webkit-scrollbar-thumb {
        background-color: #999999;
        border-radius: 10px;
      }
    }
  }

  & .closeBtn {
    cursor: pointer;
    width: 38px;
    height: 38px;
    background-color: black;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const CheckoutItem = styled.div`
  position: relative;
  background-color: white;
  padding: 15px;
  border-radius: 0.5rem;
  box-shadow: -2px 2px 10px 0px #0000000d;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  @media (min-width: 600px) {
    flex-direction: row;

    & > * {
      flex: 1;
    }
  }

  & .image {
    position: relative;
    margin: 0 auto;
    width: 120px;
    height: 120px;

    @media (min-width: 600px) {
      width: 80px;
      height: 80px;
    }
  }

  & .name {
    font-weight: 400;
    font-size: 0.875rem;
    color: var(--grey);
  }

  & .amount {
    display: flex;
    align-items: center;
    gap: 5px;

    & .total {
      @media (max-width: 600px) {
        background-color: var(--dark-grey);
        color: white;
        padding: 5px;
        border-radius: 5px;
        font-size: 0.75rem;
      }
    }
  }

  & .amountControl {
    position: relative;
    user-select: none;
    font-weight: 400;
    font-size: 0.875rem;
    display: flex;
    flex-direction: column;
    width: 60%;

    @media (min-width: 600px) {
      font-size: 0.6rem;
    }

    & div {
      border: 1px solid #bfbfbf;
      border-radius: 5px;
      display: flex;
      margin-right: auto;
    }

    & span {
      width: 25px;
      height: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-right: 1px solid #bfbfbf;

      &:last-of-type {
        border: none;
      }
    }

    & .increase,
    .decrease {
      cursor: pointer;
      font-size: 1rem;
    }

    & .qtd {
      position: absolute;
      top: -20px;
    }

    @media (max-width: 600px) {
      & .qtd {
        display: none;
      }
    }
  }

  & .removeProduct {
    cursor: pointer;
    position: absolute;
    top: 0px;
    right: 5px;
    font-size: 2rem;
    font-weight: 400;

    @media (min-width: 600px) {
      right: -10px;
      top: -10px;
      width: 18px;
      height: 18px;
      background-color: black;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      font-size: 0.5rem;
    }
  }
`;

export const CheckoutBtn = styled.div`
  cursor: pointer;
  height: 60px;
  background-color: black;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  right: 0;
  left: 0;
  font-size: 1.125rem;
`;
