import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals } from "../redux/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const TopBar = styled.div`
  display: flex;
  height: 30px;
  background-color: rgb(60, 60, 190);
  align-items: center;
  justify-content: center;
  padding: 10px;
`;
const TopBarDiv = styled.div`
  display: flex;
  width: 50%;
  color: white;
  flex-direction: row;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 20px;
`;
const CartBtn = styled.span`
  display: flex;
  height: 30px;
  align-items: center;
  margin-left: auto;
`;
const TotalAmount = styled.span`
  display: flex;
  height: 15px;
  width: 15px;
  border-radius: 7.5px;
  font-size: 12px;
  background-color: rgb(100, 100, 190);
  align-items: center;
  justify-content: center;
  margin-bottom: auto;
`;

export default function Header() {
  const dispatch = useDispatch();
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <TopBar>
      <TopBarDiv>
        <Title>UMC PlayList</Title>
        <CartBtn onClick={() => dispatch(calculateTotals())}>
          <FontAwesomeIcon icon={faCartShopping} />
          <TotalAmount>{totalAmount}</TotalAmount>
        </CartBtn>
      </TopBarDiv>
    </TopBar>
  );
}
