import { handleActions } from "redux-actions";
import * as api from "../lib/api";

const GET_FlOWERLOAD = "flowerload/GET_FLOWERLOAD";
const GET_FLOWERLOAD_SUCCESS = "flowerload/GET_FLOWERLOAD_SUCCESS";
const GET_FLOWERLOAD_FAIL = "flowerload/GET_FLOWERLOAD_FAIL";

export const getFlowerloads = () => async (dispatch) => {
  dispatch({ type: GET_FlOWERLOAD });
  try {
    console.log("asdasdas22");
    console.log(api.getFlowerload());
    const response = await api.getFlowerload();
    console.log("dadasdasd");
    console.log(response, "adsadasd");
    dispatch({
      type: GET_FLOWERLOAD_SUCCESS,
      playload: response,
    });
  } catch (e) {
    dispatch({ type: GET_FLOWERLOAD_FAIL, playload: e, error: true });
    throw e;
  }
};

const initilaState = {
  loading: {
    GET_FLOWERLOAD: false,
  },
  flowerload: null,
};

const flowerLoads = handleActions(
  {
    [GET_FlOWERLOAD]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_FLOWERLOAD: true,
      },
    }),
    [GET_FLOWERLOAD_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_FLOWERLOAD: false,
      },
      flowerload: action.playload,
    }),
    [GET_FLOWERLOAD_FAIL]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_FLOWERLOAD: false,
      },
    }),
  },
  initilaState
);

export default flowerLoads;
