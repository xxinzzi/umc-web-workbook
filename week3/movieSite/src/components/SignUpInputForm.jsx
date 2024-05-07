import React from "react";
import styled from "styled-components";

const InputFormWrapper = styled.div`
    margin: 8px;
`;

const SignUpInputField = styled.input`
    width: 260px;
    font-size: 13px;
    display: block;
    border-radius: 7px;
    border: none;
    padding: 5px;
`;

const MessageDiv = styled.div`
    height: 15px;
`;

const Message = styled.span`
    color: ${props => (props.success ? "green" : "red")};
    font-size: 11px;
`;

const SignUpInputForm = ({ label, type, value, onChange, message, success }) => {
  return (
    <InputFormWrapper>
      <SignUpInputField
        type={type}
        value={value}
        placeholder={`${label}을 입력해주세요`}
        onChange={onChange}
      />
      <MessageDiv>
        <Message success={success}>{message}</Message>
      </MessageDiv>
    </InputFormWrapper>
  );
};

export default SignUpInputForm;
