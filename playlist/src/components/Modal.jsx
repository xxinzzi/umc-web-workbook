import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, calculateTotals } from "../redux/cartSlice";
import { closeModal } from "../redux/modalSlice";
import styled from "styled-components";

const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`;
const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 100px;   
    background: white;
    padding: 15px;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
`;
const ModalTitle = styled.h2`
    font-size: 15px;
`;
const BtnWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 150px;
    height: 50px;
    align-items: center;
    justify-content: space-between;
`;
const Btn = styled.button`
    height: 25px;
    width: 50px;
    font-size: 12px;
    color: red;
    background-color: white;
    border-radius: 5px;
    border: solid 1px red;
`;

const Modal = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector((state) => state.modal.isOpen);

    const handelClearCart = () => {
        dispatch(closeModal());
        dispatch(clearCart());
        dispatch(calculateTotals());
    }

    if(!isOpen){
        return false;
    }

    return (
        <ModalWrapper>
            <ModalContent>
                <ModalTitle>담아두신 모든 음반을 삭제하시겠습니까?</ModalTitle>
                <BtnWrapper>
                    <Btn onClick={handelClearCart}>예</Btn>
                    <Btn onClick={() => dispatch(closeModal())}>아니오</Btn>
                </BtnWrapper>
            </ModalContent>
        </ModalWrapper>
    )
}

export default Modal