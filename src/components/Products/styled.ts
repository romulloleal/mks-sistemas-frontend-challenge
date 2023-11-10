import styled from "styled-components";

export const ProductsContainer = styled.section`
  width: 70%;
  margin: 0 auto;

  display: grid;
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }

  gap: 1.5rem;
`;

export const ProductItem = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 2px 8px 0px #00000022;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & .image {
    margin: 0 auto;
    position: relative;
    width: 100%;
    height: 150px;
  }

  & .info {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    padding: 15px;

    & div {
      display: flex;
      gap: 10px;

      & .name {
        color: var(--grey);
      }

      & .price {
        margin-left: auto;
        background-color: var(--dark-grey);
        color: white;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
        height: 26px;
        font-weight: 700;
      }
    }

    & .description {
      color: var(--grey);
      font-weight: 300;
      font-size: 0.625rem;
    }
  }

  & .buyBtn {
    cursor: pointer;
    width: 100%;
    background-color: var(--blue);
    color: white;
    border-radius: 0 0 0.5rem 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 32px;
    gap: 0.5rem;
    font-weight: 600;
    font-size: 0.875rem;
  }
`;
