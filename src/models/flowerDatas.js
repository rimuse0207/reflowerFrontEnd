import { handleActions } from "redux-actions";
import * as api from "../lib/api";

const GET_DATA = "FlowerDatas/GET_DATA";
const GET_DATA_SUCCESS = "FlowerDatas/GET_DATA_SUCCESS";
const GET_DATA_FAILS = "FlowerDatas/GET_DATA_FAILS";

export const getData = () => async (dispatch) => {
  dispatch({ type: GET_DATA });
  try {
    console.log("asdasd");
    const response = await api.getData();
    console.log(response);
    dispatch({
      type: GET_DATA_SUCCESS,
      playload: response.data,
    });
  } catch (e) {
    dispatch({ type: GET_DATA_FAILS, playload: e, error: true });
    throw e;
  }
};

const initialState = {
  loading: {
    GET_DATA: false,
  },
  flowerdata: null,
};

const flowerDatas = handleActions(
  {
    [GET_DATA]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_DATA: true,
      },
    }),
    [GET_DATA_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_DATA: false,
      },
      flowerdata: action.playload,
    }),
    [GET_DATA_FAILS]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_DATA: false,
      },
    }),
  },
  initialState
);

export default flowerDatas;
