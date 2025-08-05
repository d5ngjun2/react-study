import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { set } from "react-hook-form";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const [isCapsLockOn, setIsCapsLockOn] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const checkCapsLock = (event) => {
    const isCapsLockOn = event.getModifierState("CapsLock");
    setIsCapsLockOn(isCapsLockOn);
  };

  const handleLogin = (event) => {
    if (event) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
      toast.error("로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요.");
    }
  };

  return (
    <MainContent>
      <LoginContent>
        <h2>로그인</h2>
        <InputWrapper>
          <Label>아이디</Label>
          <FormInput
            type="text"
            placeholder="아이디를 입력해주세요."
            onKeyUp={(ev) => checkCapsLock(ev)}
            onAbort={(ev) => checkCapsLock(ev)}
          />
        </InputWrapper>
        <InputWrapper>
          <Label>비밀번호</Label>
          <FormInput
            type="password"
            onKeyUp={(ev) => checkCapsLock(ev)}
            onAbort={(ev) => checkCapsLock(ev)}
            placeholder="비밀번호를 입력해주세요."
          />
          <CapsLockWarning>
            {isCapsLockOn ? "Caps Lock이 켜져 있습니다." : ""}
          </CapsLockWarning>
        </InputWrapper>

        <ButtonGroup>
          <LoginButton type="submit" onClick={(ev) => handleLogin(ev)}>
            로그인
          </LoginButton>
          <NoAccount>비밀번호를 잊으셨나요?</NoAccount>
        </ButtonGroup>
      </LoginContent>
    </MainContent>
  );
};

const MainContent = styled.div`
  display: flex;
  border-radius: 5px;
  background-color: #ececec;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #000000;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
`;

const InputWrapper = styled.div`
  margin-bottom: 20px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Label = styled.p`
  margin: 10px 10px 1px 0;
  font-weight: bold;
  text-align: left;
  width: 80%;
  align-items: center;
`;

const FormInput = styled.input`
  width: 80%;
  padding: 10px;
  border-radius: 5px;
  border: 2px solid #dfdfdf;
  display: block;
  margin: 0 0 12px 0;
  justify-content: center;
  align-items: center;

  &:focus {
    border-color: #a3a3a3;
    outline: none;
  }
`;

const CapsLockWarning = styled.p`
  margin: 0;
  padding: 0;
  color: #000000;
  font-size: 12px;
  margin-bottom: 10px;
`;

const LoginButton = styled.button`
  width: 100%;
  margin: 2px 0;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  color: white;
  border-radius: 5px;
  border: none;

  &:hover {
    background-color: #363636;
    border: none;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  width: 83%;
`;

const NoAccount = styled.p`
  margin: 10px 0;
  font-size: 14px;
  color: #888888;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #000000;
  }
`;

const LoginContent = styled.form`
  width: 700px;
  height: 600px;
  background-color: #f7f7f7;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Login;
