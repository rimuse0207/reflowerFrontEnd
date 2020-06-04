import React from "react";
import { connect } from "react-redux";
import Login from "../components/Login";
import { postLogin, initialForm } from "../models/user/login";

const LoginCounter = ({
  sendOn,
  emailCheck,
  passwordCheck,
  postLogin,
  loginSuccess,
  initialForm,
}) => {
  const handleSend = (email, password) => {
    console.log("adasds");
    postLogin(email, password);
  };

  return (
    <Login
      sendOn={sendOn}
      emailCheck={emailCheck}
      passwordCheck={passwordCheck}
      handleSend={handleSend}
      loginSuccess={loginSuccess}
      initialForm={initialForm}
    ></Login>
  );
};

export default connect(
  (state) => ({
    sendOn: state.login.sendOn,
    emailCheck: state.login.emailCheck,
    passwordCheck: state.login.passwordCheck,
    loginSuccess: state.login.loginSuccess,
  }),
  {
    postLogin,
    initialForm,
  }
)(LoginCounter);
