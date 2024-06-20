import React, {useEffect} from "react";
import CartItem from "./components/CartItem";
import { useSelector, useDispatch } from "react-redux";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Loader from "./components/Loader";
import styled from "styled-components";
import { openModal } from "./redux/modalSlice";
import { fetchCartItems } from "./redux/cartSlice";

const Main = styled.div`
  display: flex;
  color: white;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  display: flex;
  width: 700px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
`;
const Title = styled.h1`
  font-size: 20px;
  color: black;
`;
const Message = styled.span`
  font-size: 13px;
  color: gray;
  margin: 10px;
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
  font-size: 13px;
  font-weight: 600;
  color: black;
`;
const TotalPrice = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: black;
  margin-left: auto;
`;
const ClearCartBtn = styled.button`
  height: 25px;
  width: 110px;
  font-size: 13px;
  color: red;
  background-color: white;
  border: solid 1px red;
  border-radius: 5px;
`;

function App() {
  const items = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const isLoading = useSelector((state) => state.cart.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartItems());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Main>
        {isLoading ? ( 
        <Loader/> 
        ) : (
          <Wrapper>
            <Title>당신이 선택한 음반</Title>
            { items.length === 0 ? (
              <Message>고객님이 좋아하는 음반을 담아보세요~</Message>
              ) : (
              <>
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
                <ClearCartBtn onClick={() => dispatch(openModal())}>
                  장바구니 초기화
                </ClearCartBtn>
              </>
            )}
          </Wrapper>
        )}
      </Main>
      <Modal />
    </div>
  );
}

export default App;
