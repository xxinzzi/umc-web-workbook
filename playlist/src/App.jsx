import React from "react";
import CartItem from "./components/CartItem";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, calculateTotals } from "./redux/cartSlice";
import Header from "./components/Header";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  color: white;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
`;
const Title = styled.h1`
  font-size: 20px;
  color: black;
`;
const CartItemsWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px;
`;
const PriceWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
  border-top: solid 1px black;
  align-items: center;
  justify-content: center;
  margin: 15px;
`;
const Span = styled.span`
  font-size: 12px;
  color: black;
`;
const TotalPrice = styled.span`
  font-size: 12px;
  color: black;
  margin-left: auto;
`;
const ClearCartBtn = styled.button`
  height: 25px;
  width: 110px;
  font-size: 12px;
  color: red;
  background-color: rgb(240, 190, 190);
  border: solid 1px red;
  border-radius: 5px;
`;

function App() {
  const items = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  return (
    <div>
      <Header />
      <Main>
        <Wrapper>
          <Title>당신이 선택한 음반</Title>
          <CartItemsWrapper>
            {items.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                title={item.title}
                singer={item.singer}
                price={item.price}
                amount={item.amount}
                img={item.img}
              />
            ))}
          </CartItemsWrapper>
          <PriceWrapper>
            <Span>총 가격</Span>
            <TotalPrice>{"₩ " + totalPrice}</TotalPrice>
          </PriceWrapper>
          <ClearCartBtn onClick={() => dispatch(clearCart())}>
            장바구니 초기화
          </ClearCartBtn>
        </Wrapper>
      </Main>
    </div>
  );
}

export default App;
