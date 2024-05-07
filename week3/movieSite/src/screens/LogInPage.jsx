import React, { useEffect, useState } from "react";
import LogInInputForm from "../components/LogInInputForm";
import styled from "styled-components";

const Screen = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  height: 500px;
  width: 400px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 7px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Header = styled.span`
  font-size: 25px;
  font-weight: 700;
  color: white;
  margin: 15px;
`;

const InputDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const LoginButton = styled.button`
  height: 27px;
  width: 270px;
  background: rgb(200, 180, 20);
  border-radius: 7px;
  margin: 20px;
  border: none;
`;

const LogInPage = () => {

    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const handleIdChange = (e) => {
        setId(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleLogin = () => {

    }
  
    return (
      <Screen>
        <Wrapper>
          <Header>Log In</Header>
          <InputDiv>
            <LogInInputForm
              label="Email"
              type="text"
              value={id}
              onChange={handleIdChange}
            />
            <LogInInputForm
              label="Password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </InputDiv>
          <div>
            <LoginButton onClick={handleLogin}>Log In</LoginButton>
          </div>
        </Wrapper>
      </Screen>
    );
};

export default LogInPage;
