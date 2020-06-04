import React, { useEffect } from "react";
import SignUp from "../components/SignUp";
import { connect } from "react-redux";
import { postSignUp, initialForm } from "../models/user/login";

const SignUpContainer = ({ signUp, postSignUp, emailOverlap, initialForm }) => {
  const handleSend = (email, password) => {
    postSignUp(email, password);
  };

  return (
    <SignUp
      signUp={signUp}
      handleSend={handleSend}
      emailOverlap={emailOverlap}
      initialForm={initialForm}
    ></SignUp>
  );
};

export default connect(
  (state) => ({
    signUp: state.login.signUp,
    emailOverlap: state.login.emailOverlap,
  }),
  { postSignUp, initialForm }
)(SignUpContainer);
