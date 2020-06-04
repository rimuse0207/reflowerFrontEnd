import { handleActions, createAction } from "redux-actions";
import * as api from "../../lib/api";

const POST_COMMENT = "diary/POST_COMMENT";

const GET_COMMENT = "diary/GET_COMMENT";
const GET_COMMENT_SUCCESS = "diary/GET_COMMENT_SUCCESS";

const INITIALIZE_FORM = "diary/INITIALIZE_FORM";

export const postComment = (name, desc, id) => async (dispatch) => {
  dispatch({ type: POST_COMMENT });
  try {
    await api.postComment(name, desc, id);
  } catch (e) {
    console.log("comment error");
  }
};

export const getComment = (id) => async (dispatch) => {
  dispatch({ type: GET_COMMENT });
  try {
    const response = await api.getComment(id);
    dispatch({ type: GET_COMMENT_SUCCESS, playload: response });
  } catch (e) {
    console.log("Comment read error");
  }
};

export const initialForm = createAction(INITIALIZE_FORM);

const initialState = {
  sendCheck: null,
  useredName: "",
  desc: "",
  commentData: "",
};

const comment = handleActions(
  {
    [INITIALIZE_FORM]: (state) => initialState,
    [POST_COMMENT]: (state) => ({
      ...state,
      sendCheck: true,
    }),
    [GET_COMMENT]: (state) => ({
      ...state,
      sendCheck: true,
    }),
    [GET_COMMENT_SUCCESS]: (state, action) => ({
      ...state,
      sendCheck: false,
      commentData: action.playload,
    }),
  },
  initialState
);
export default comment;
