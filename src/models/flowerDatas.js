import { handleActions } from "redux-actions";
import * as api from "../lib/api";

const GET_DATA = "FlowerDatas/GET_DATA";
const GET_DATA_SUCCESS = "FlowerDatas/GET_DATA_SUCCESS";
const GET_DATA_FAILS = "FlowerDatas/GET_DATA_FAILS";

export const getData = () => async (dispatch) => {
  dispatch({ type: GET_DATA });
  try {
    const response = await api.getData();
<<<<<<< HEAD
    console.log(response.data);
=======
    console.log("12iufjsaidohfiuhsadi");
>>>>>>> 2ff11c8e1d6f5c190ea74f94723a6ac0ec433194
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
