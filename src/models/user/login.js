import { handleActions, createAction } from "redux-actions";
import * as api from "../../lib/api";
const POST_LOGINPOST = "login/POST_LOGINPOST";
const POST_LOGINPOST_SUCCESS = "login/POST_LOGINPOST_SUCCESS";
const POST_LOGINPOST_FAIL = "login/POST_LOGINPOST_FAIL";

const POST_SIGNUPPOST = "signup/POST_SIGNUPPOST";
const POST_SIGNUPPOST_SUCCESS = "signup/POST_SIGNUPPOST_SUCCESS";

const INITIALIZE_FORM = "signup/INITIALIZE_FORM";

export const postLogin = (email, password) => async (dispatch) => {
  dispatch({ type: POST_LOGINPOST });
  try {
    const response = await api.postLogin(email, password);
    dispatch({ type: POST_LOGINPOST_SUCCESS, playload: response.data });
  } catch (e) {
    dispatch({
      type: POST_LOGINPOST_FAIL,
      playload: e,
      error: true,
    });
  }
};

export const postSignUp = (email, password) => async (dispatch) => {
  dispatch({ type: POST_SIGNUPPOST });
  try {
    const response = await api.postSignUp(email, password);
    dispatch({ type: POST_SIGNUPPOST_SUCCESS, playload: response.data });
  } catch (e) {
    console.log("signUP errror");
  }
};

export const initialForm = createAction(INITIALIZE_FORM);

const initialState = {
  sendCheck: null,
  emailCheck: true,
  passwordCheck: true,
  signUp: false,
  emailOverlap: "",
  loginSuccess: false,
  login: {
    useredName: "",
    message: "",
  },
};

const login = handleActions(
  {
    [INITIALIZE_FORM]: (state) => ({
      ...state,
      sendCheck: null,
      emailCheck: true,
      passwordCheck: true,
      signUp: false,
      emailOverlap: "",
      loginSuccess: false,
      login: {
        useredName: "",
        message: "",
      },
    }),
    [POST_LOGINPOST]: (state) => ({
      ...state,
      sendCheck: true,
    }),
    [POST_LOGINPOST_SUCCESS]: (state, action) => ({
      ...state,
      sendCheck: false,
      emailCheck: action.playload.emailCheck,
      passwordCheck: action.playload.passwordCheck,
      loginSuccess: action.playload.loginSuccess,
      login: { useredName: action.playload.useredName },
    }),
    [POST_LOGINPOST_FAIL]: (state, action) => ({
      ...state,
      emailCheck: action.playload.emailCheck,
      password: action.playload.passwordCheck,
    }),
    [POST_SIGNUPPOST]: (state) => ({
      ...state,
      sendCheck: true,
    }),
    [POST_SIGNUPPOST_SUCCESS]: (state, action) => ({
      ...state,
      sendCheck: false,
      signUp: action.playload.signUp,
      emailOverlap: action.playload.emailOverlap,
    }),
  },
  initialState
);

export default login;
