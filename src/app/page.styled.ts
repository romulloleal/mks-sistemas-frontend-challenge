"use client";
import styled from "styled-components";

export const Header = styled.header`
  height: 100px;
  display: flex;
  align-items: center;
  background-color: var(--blue);
  color: white;

  & .content {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    & .logo {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-weight: 600;
      font-size: 2.5rem;

      & span {
        font-weight: 300;
        font-size: 1.25rem;
      }
    }
  }
`;

export const Main = styled.main`
  margin-top: 5%;
  margin-bottom: 80px;
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  height: 34px;
  background-color: var(--light-grey);
  font-size: 0.75rem;
`;
