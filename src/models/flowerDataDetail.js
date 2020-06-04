import { handleActions } from "redux-actions";
import * as api from "../lib/api";

const POST_DATADETAIL = "FlowerDetail/POST_DATADETAIL";
const POST_DATADETAIL_SUCCESS = "FlowerDetail/POST_DATADETAIL_SUCCESS";
const POST_DATADETAIL_FAILS = "FlowerDetail/POST_DATADETAIL_FAILS";

const GET_DATADETAIL = "FlowerDetail/GET_DATADETAIL";
const GET_DATADETAIL_SUCCESS = "FlowerDetail/GET_DATADETAIL_SUCCESS";
const GET_DATADETAIL_FAILS = "FlowerDetail/GET_DATADETAIL_FAILS";
const GET_DATARESET = "FlowerDetail/GET_DATARESET";

export const postDataDetail = (number) => async (dispatch) => {
  dispatch({ type: POST_DATADETAIL });
  try {
    const response = await api.sendFlowerDataDetail(number);
    dispatch({
      type: POST_DATADETAIL_SUCCESS,
      playload: response,
    });
  } catch (e) {
    dispatch({ type: POST_DATADETAIL_FAILS, error: true });
    throw e;
  }
};

export const getDataDetail = () => async (dispatch) => {
  dispatch({ type: GET_DATADETAIL });
  try {
    const response = await api.getFlowerDataDetail();
    console.log("getDataDetail");
    dispatch({
      type: GET_DATADETAIL_SUCCESS,
      playload: response,
    });
  } catch (e) {
    dispatch({ type: GET_DATADETAIL_FAILS, playload: e, error: true });
    throw e;
  }
};
export const getDeleteDetail = () => (dispatch) => {
  try {
    dispatch({ type: GET_DATARESET, playload: null });
  } catch (e) {}
};

const initialState = {
  sendOn: false,
  loading: {
    GET_DATADETAIL: false,
  },
  datadetail: null,
};

const flowerDataDetail = handleActions(
  {
    [POST_DATADETAIL]: (state) => ({
      ...state,
      sendOn: true,
    }),
    [POST_DATADETAIL_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_DATADETAIL: false,
      },
      datadetail: action.playload,
    }),
    [POST_DATADETAIL_FAILS]: (state) => ({
      ...state,
      sendOn: false,
    }),
    [GET_DATADETAIL]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_DATADETAIL: true,
      },
    }),
    [GET_DATARESET]: (state, action) => ({
      initialState,
    }),
    [GET_DATADETAIL_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_DATADETAIL: false,
      },
      datadetail: action.playload,
    }),
    [GET_DATADETAIL_FAILS]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_DATADETAIL: false,
      },
    }),
  },
  initialState
);

export default flowerDataDetail;
