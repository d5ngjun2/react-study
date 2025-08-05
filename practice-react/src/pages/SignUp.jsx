import React from "react";
import styled from "styled-components";
import * as yup from "yup";
import useSignUpForm from "../hooks/useSignUpForm";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { signUpSchema } = useSignUpForm();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  return (
    <MainContent>
      <SignUpContent onSubmit={handleSubmit((data) => console.log(data))}>
        <h2>회원가입</h2>
        <InputWrapper>
          <Label>아이디</Label>
          <FormInput
            {...register("id")}
            type="text"
            id="id"
            placeholder="아이디를 입력해주세요."
          />
          <ErrorText>{errors.id?.message}</ErrorText>
        </InputWrapper>
        <InputWrapper>
          <Label>이름</Label>
          <FormInput
            {...register("name")}
            type="text"
            id="name"
            placeholder="이름을 입력해주세요."
          />
          <ErrorText>{errors.name?.message}</ErrorText>
        </InputWrapper>
        <InputWrapper>
          <Label>비밀번호</Label>
          <FormInput
            {...register("password")}
            type="password"
            id="password"
            placeholder="비밀번호를 입력해주세요."
          />
          <ErrorText>{errors.password?.message}</ErrorText>
        </InputWrapper>
        <InputWrapper>
          <Label>비밀번호 확인</Label>
          <FormInput
            {...register("confirmPassword")}
            type="password"
            placeholder="비밀번호를 다시 입력해주세요."
            id="confirmPassword"
          />
          <ErrorText>{errors.confirmPassword?.message}</ErrorText>
        </InputWrapper>
        <InputWrapper>
          <Label>이메일</Label>
          <FormInput
            {...register("email")}
            type="email"
            id="email"
            placeholder="이메일을 입력해주세요."
          />
          <ErrorText>{errors.email?.message}</ErrorText>
        </InputWrapper>

        <ButtonGroup>
          <SignUpButton type="submit">회원가입</SignUpButton>
          <NoAccount>계정이 이미 있으신가요?</NoAccount>
        </ButtonGroup>
      </SignUpContent>
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

const SignUpButton = styled.button`
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

const SignUpContent = styled.form`
  width: 700px;
  height: 720px;
  background-color: #f7f7f7;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ErrorText = styled.p`
  color: red;
  font-size: 12px;
  width: 80%;
  margin-top: -8px;
  margin-bottom: 8px;
  text-align: left;
`;

export default SignUp;
