import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import SignUp from "../containers/SignUpContainer";
const BackBox = styled.div`
  margin-left: 10rem;
  background-color: white;
  box-shadow: 3px 3px 0 #cfd2d1;
  width: 40rem;
  height: 20rem;
  padding: 10px;
`;
const LoginGrap = styled.div`
  background-color: #6561e6;

  height: 4rem;
  margin: 10px;
  margin-top: 5px;
  display: flex;
  padding-left: 10px;
  align-items: center;
  color: white;
  font-size: 1.3rem;
`;
const LoginInput = styled.input`
  background-color: none;
  height: 2rem;
  width: 97%;
  margin: 10px;
  border: none;
  border-bottom: 1px solid gray;
`;
const LoginButton = styled.button`
  background-color: #3f51b5;
  color: white;
  height: 3rem;
  margin: 10px;
  width: 39rem;
  font-size: 1.3rem;
`;
const LoginBox = styled.div`
  color: #3f51b5;
  box-shadow: 1px 1px 0 #cfd2d1;
  padding: 10px;
  margin-left: 10px;
  width: 50%;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  font-family: upset;
`;

const CheckedBox = styled.div`
  display: flex;
  justify-content: center;
  color: red;
`;

const Login = ({
  sendOn,
  emailCheck,
  passwordCheck,
  handleSend,
  history,
  loginSuccess,
  initialForm,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    handleSend(email, password);
    setPassword("");
  };

  useEffect(() => {
    if (loginSuccess) {
      setEmail("");
      setPassword("");
      history.goBack("/");
    } else {
    }
  }, [loginSuccess]);

  const Check =
    emailCheck || passwordCheck ? (
      <div></div>
    ) : (
      <CheckedBox>아이디/비밀번호를 다시 확인해 주세요</CheckedBox>
    );

  return (
    <BackBox>
      <LoginGrap>로그인</LoginGrap>
      <form>
        <LoginInput
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChangeEmail}
        ></LoginInput>
        <LoginInput
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleChangePassword}
        ></LoginInput>
        {Check}
        <LoginButton onClick={handleClick}>
          <span role="img" aria-label="login">
            🔐
          </span>
          로그인
        </LoginButton>
      </form>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LoginBox>
          <span role="img" aria-label="signup">
            👤
          </span>
          회원 가입
        </LoginBox>
        <LoginBox>
          <span role="img" aria-label="key">
            🔑
          </span>
          비밀번호 찾기
        </LoginBox>
      </div>
    </BackBox>
  );
};
export default withRouter(Login);
