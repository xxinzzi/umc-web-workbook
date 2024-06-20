import React from "react";
import { useDispatch } from "react-redux";
import {
  increase,
  decrease,
  calculateTotals,
} from "../redux/cartSlice";
import { ChevronDown, ChevronUp } from "../constants/icons";
import styled from "styled-components";

const List = styled.li`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 10px 0;
  align-items: center;
`;
const Poster = styled.img`
  height: 60px;
  width: 60px;
`;
const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px 20px;
`;
const Detail = styled.span`
  display: flex;
  font-size: 13px;
  color: black;
`;
const Price = styled.span`
  display: flex;
  font-size: 13px;
  color: gray;
  margin-top: 5px;
`;
const AmountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 20px;
  justify-content: center;
  align-items: center;
  margin-left: auto;
`;
const AmountBtn = styled.button`
  display: flex;
  height: 20px;
  width: 20px;
  color: gray;
  background-color: white;
  border: none;
  justify-content: center;
  align-items: center;
`;
const Amount = styled.span`
  display: flex;
  font-size: 13px;
  color: black;
`;

export default function CartItem({ id, img, title, singer, price, amount }) {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increase(id));
    dispatch(calculateTotals());
  };

  const handleDecrease = () => {
    dispatch(decrease(id));
    dispatch(calculateTotals());
  };

  return (
    <List key={id}>
      <Poster src={img} alt={title}></Poster>
      <DetailWrapper>
        <Detail>{`${title} | ${singer}`}</Detail>
        <Price>{"₩ " + price}</Price>
      </DetailWrapper>
      <AmountWrapper>
        <AmountBtn onClick={handleIncrease}>
          <ChevronUp />
        </AmountBtn>
        <Amount>{amount}</Amount>
        <AmountBtn onClick={handleDecrease}>
          <ChevronDown />
        </AmountBtn>
      </AmountWrapper>
    </List>
  );
}
