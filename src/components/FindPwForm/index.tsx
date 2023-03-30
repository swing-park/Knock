import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FIND } from "api";
const FindPwForm = () => {
  const [email, setEmail] =useState("")
  const [emailBoolean, setEmailBoolean] = useState(false);
  const [emailMsg, setEmailMsg] = useState("");
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const emailChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const emailCheck = e.target.value
    setEmail(emailCheck);
    const emailBoolean = emailRegex.test(e.target.value);
    setEmailBoolean(emailBoolean);
    setEmailMsg(emailBoolean ? "" : "이메일형식이 올바르지 않습니다.");
  }
  const navigate = useNavigate();
  const loginPage = () => {
    navigate("/login");
  };
  const idPage = () => {
    navigate("/login/findid");
  };
  const queryClient = useQueryClient()
  const emailMutation = useMutation("findPw", FIND.findPw, {
    onSuccess: (response) => {
      queryClient.invalidateQueries("find");
      return response.data;
    },
  });
  const pwSubmit =(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    if(email.trim() === "") return alert("이메일을 적어주세요")
    
    emailMutation.mutate({ email })
    navigate("/login/findPw/code", { state: { email: email } });
    setEmail("")
  }
  return (
    <StFindPWWrap>
      <StLogo
        onClick={() => loginPage()}
        width="214"
        height="52"
        viewBox="0 0 214 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_233_2558)">
          <path
            d="M38.1199 30.6145L54.6516 50.9797H44.4698L32.4268 36.0955L25.0916 43.3287V51.0078H16.771V15.1124H25.0916V32.3666L43.2087 15.0176H54.4529L38.1199 30.6145Z"
            fill="#007FFF"
          />
          <path
            d="M90.7602 50.8111H83.3682L67.834 31.3904V50.8181H61.3178V22.6123H68.7098L84.2278 42.1523V22.6123H90.7602V50.8111Z"
            fill="#007FFF"
          />
          <path
            d="M182.311 34.8068L195.287 50.811H187.295L177.839 39.1151L172.081 44.7717V50.8005H165.556V22.6368H172.089V36.1832L186.317 22.5596H195.129L182.311 34.8068Z"
            fill="#007FFF"
          />
          <path
            d="M112.725 22.2998C102.925 22.2998 96.2181 28.8131 96.2181 36.6959C96.2181 44.5786 102.925 51.092 112.725 51.092C122.526 51.092 129.229 44.6137 129.229 36.6959C129.229 28.778 122.522 22.2998 112.725 22.2998ZM112.725 46.1973C110.889 46.2139 109.088 45.7647 107.543 44.9052C110.86 44.1257 113.35 40.8883 113.35 37.0084C113.35 32.8441 110.479 29.4171 106.793 28.9817C108.477 27.8213 110.573 27.201 112.725 27.2261C118.869 27.2261 122.696 31.882 122.696 36.7064C122.696 41.5309 118.869 46.1973 112.725 46.1973Z"
            fill="#007FFF"
          />
          <path
            d="M148.7 46.1973C147.011 46.2116 145.354 45.7992 143.932 45.0105C148.12 44.4908 151.364 41.106 151.364 37.0084C151.364 32.6334 147.674 29.073 143.064 28.9326C144.642 27.7893 146.643 27.1761 148.7 27.205C150.119 27.2128 151.514 27.5143 152.77 28.0841C154.027 28.654 155.107 29.4758 155.922 30.481L160.09 26.4993C158.622 25.1719 156.86 24.1146 154.909 23.3907C152.959 22.6667 150.859 22.2909 148.737 22.2858C138.936 22.2507 132.663 28.7991 132.663 36.6819C132.663 44.5646 138.936 51.0779 148.737 51.0779C153.724 51.1517 157.207 49.4382 160.09 46.8644L155.63 43.1039C154.854 44.0697 153.817 44.8565 152.609 45.3957C151.401 45.9349 150.059 46.2101 148.7 46.1973Z"
            fill="#007FFF"
          />
          <path
            d="M201.207 39.2558L205.793 17.0156L214 18.2059L209.398 40.5198L201.207 39.2558Z"
            fill="#007FFF"
          />
          <path
            d="M199.962 45.6638C200.05 45.2085 200.241 44.7727 200.523 44.3813C200.806 43.99 201.175 43.6507 201.609 43.3829C202.044 43.1152 202.535 42.9242 203.054 42.8209C203.574 42.7177 204.112 42.7041 204.637 42.7811L204.836 42.8092C205.362 42.8849 205.866 43.0498 206.318 43.2944C206.771 43.539 207.163 43.8585 207.473 44.2345C207.782 44.6106 208.003 45.0359 208.123 45.486C208.242 45.9361 208.258 46.4022 208.169 46.8576C208.081 47.3139 207.89 47.7507 207.607 48.1429C207.323 48.535 206.953 48.8748 206.517 49.1427C206.082 49.4106 205.589 49.6013 205.068 49.7039C204.547 49.8064 204.008 49.8188 203.482 49.7403L203.283 49.7122C202.758 49.6353 202.256 49.4695 201.804 49.2244C201.353 48.9792 200.963 48.6596 200.654 48.2836C200.346 47.9077 200.126 47.4828 200.007 47.0333C199.888 46.5838 199.873 46.1184 199.962 45.6638Z"
            fill="#007FFF"
          />
          <path
            d="M33.6406 6.88273L27.2393 9.28027L28.5271 11.8584L34.9284 9.46089L33.6406 6.88273Z"
            fill="#007FFF"
          />
          <path
            d="M20.5696 0.00505102L19.5689 7.35938L22.7905 7.68808L23.7912 0.333752L20.5696 0.00505102Z"
            fill="#007FFF"
          />
          <path
            d="M8.13924 2.12527L5.74033 4.01611L10.4351 8.48228L12.834 6.59143L8.13924 2.12527Z"
            fill="#007FFF"
          />
          <path
            d="M0.824865 11.2665L-0.0010376 13.9829L8.63355 15.9514L9.45946 13.235L0.824865 11.2665Z"
            fill="#007FFF"
          />
          <path
            d="M8.7063 19.3265L0.828033 24.3213L2.74436 26.5877L10.6226 21.5929L8.7063 19.3265Z"
            fill="#007FFF"
          />
        </g>
      </StLogo>
      <StPwSubmitForm onSubmit={pwSubmit}>
        <Stcontent>회원님의 이메일을 입력해주세요.</Stcontent>
        <StInput
          type="text"
          placeholder="이메일을 적어주세요"
          value={email}
          onChange={emailChange}
        />
        {!emailBoolean && <StErrorMsg>{emailMsg}</StErrorMsg>}
        <Stbutton>다음</Stbutton>
      </StPwSubmitForm>
      <StfondId>
        이메일이 기억나지 않는다면?
        <StfondIdspan onClick={() => idPage()}>이메일 찾기</StfondIdspan>
      </StfondId>
    </StFindPWWrap>
  );
};

export default FindPwForm;


const StFindPWWrap = styled.div`
  text-align: center;
  width: 460px;
`;
const StLogo = styled.svg`
  cursor: pointer;
`;
const Stcontent = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
  color: #121212;
  margin: 20px 0 35px;
`;
const StPwSubmitForm = styled.form``;

const StInput = styled.input`
  height: 56px;
  width: 100%;
  border-radius: 10px;
  border: 1px solid #121212;
  padding: 0 15px;
  outline: 0;
 
  &::placeholder {
    color: #bdbdbd;
  }
  &:focus {
    border: 1px solid #007fff;
  }
`;

const Stbutton = styled.button`
  background: #007fff;
  height: 56px;
  width: 100%;
  margin-top: 20px;
  border-radius: 10px;
  border: 0;
  color: #fff;
  cursor: pointer;
`;
const StfondId = styled.p`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  margin-top: 50px;
  justify-content: center;
  color: #828282;
`;
const StfondIdspan = styled.span`
  display: block;
  margin-left: 30px;
  color: #007fff;
  cursor: pointer;
`;

const StErrorMsg = styled.p`
  color: #ff0000;
  font-size: 0.75rem;
  margin-top: 10px;
  text-align: left;
`;