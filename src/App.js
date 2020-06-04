import React, { useState, useEffect } from "react";
import styled from "styled-components";
import styled2 from "./App.css";
import { Route, Switch, Link } from "react-router-dom";
import CounterContainer from "./containers/counterContainer";
import FlowerDatas from "./containers/FlowerDatasContainer";
import Login from "./containers/LoginCounter";
import SignUp from "./containers/SignUpContainer";
import Navgation from "./components/Navgation";
import FlowerDatasContainer from "./containers/FlowerDatasContainer";
import FlowerLoadContainer from "./containers/FlowerLoadContainer";
import Start from "./components/start/Start";
import Write from "./containers/diary/WriteContainer";
import { connect } from "react-redux";
import { initialForm } from "./models/user/login";
import Read from "./containers/diary/ReadContainer";

const Header = styled.header`
  background: #3f51b5;
  color: white;
  width: 100%;
  height: 3rem;
  margin: 0px;
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled.div`
  font-size: 1.2rem;
  padding: 40px;
`;
const LoginForm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  padding: 20px;
`;

const Box = styled.div`
  padding-top: 2rem;
  padding-left: 14rem;
`;

function App({ loginSuccess, login, initialForm }) {
  const [clickOn, setClickOn] = useState(true);

  const handleLogOut = () => {
    localStorage.setItem("useredName", false);
    localStorage.setItem("loginee", false);
    initialForm();
  };

  const handleClick = () => {
    setClickOn(true);
  };

  useEffect(() => {}, [loginSuccess]);

  const Success = loginSuccess ? (
    <>
      <div>{login.useredName}님 </div>
      <button onClick={handleLogOut}>logout</button>
    </>
  ) : (
    <>
      <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
        <span role="img" aria-label="login">
          ✈️
        </span>
        ーlogin
      </Link>
      <Link to="/signUp" style={{ textDecoration: "none", color: "white" }}>
        <span role="img" aria-label="logout">
          🛩
        </span>
        ーSign Up
      </Link>
    </>
  );

  const ClickOn = clickOn ? (
    <div styled={styled2}>
      <Navgation></Navgation>
      <Header>
        <Title>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <span role="img" aria-label="flower">
              🌺
            </span>
            이 꽃 뭐야
          </Link>
        </Title>
        <LoginForm>{Success}</LoginForm>
      </Header>
      <Box>
        <Switch>
          <Route path="/" component={FlowerDatasContainer} exact={true}></Route>
          <Route path="/flowerload" component={FlowerLoadContainer}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/signUp" component={SignUp}></Route>
          <Route path="/read" component={Read}></Route>
          <Route
            path="/write"
            component={login.useredName ? Write : Login}
          ></Route>
        </Switch>
      </Box>
      <CounterContainer></CounterContainer>
      <footer></footer>
    </div>
  ) : (
    <Start></Start>
  );

  return <div onClick={handleClick}>{ClickOn}</div>;
}

export default connect(
  (state) => ({
    loginSuccess: state.login.loginSuccess,
    login: state.login.login,
  }),
  { initialForm }
)(App);
