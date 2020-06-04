import { handleActions, createAction } from "redux-actions";
import * as api from "../../lib/api";

const POST_DIARYPOST = "diary/POST_DIARYPOST";
const POST_DIARYPOST_SUCCESS = "diary/POST_DIARYPOST_SUCCESS";

const GET_DIARYGET = "diary/GET_DIARYGET";
const GET_DIARYGET_SUCCESS = "diary/GET_DIARYGET_SUCCESS";

const POST_DELETE = "diary/POST_DELETEPOST";

export const postDiary = (
  form,
  file,
  name,
  date,
  flowername,
  title,
  desc
) => async (dispatch) => {
  dispatch({ type: POST_DIARYPOST });
  try {
    const response = await api.postDiary(
      form,
      file,
      name,
      date,
      flowername,
      title,
      desc
    );
    dispatch({ type: POST_DIARYPOST_SUCCESS, playload: response.data });
  } catch (e) {
    console.log("Diary Error");
  }
};

export const getDiary = () => async (dispatch) => {
  dispatch({ type: GET_DIARYGET });
  try {
    const response = await api.getDiary();
    dispatch({ type: GET_DIARYGET_SUCCESS, playload: response.data });
  } catch (e) {
    console.log("Diary read error");
  }
};

export const postDelete = (id) => async (dispatch) => {
  dispatch({ type: POST_DELETE });
  try {
    await api.postDelete(id);
  } catch (e) {
    console.log("delete error");
  }
};

const initialState = {
  sendCheck: null,
  diaryData: "",
  imageFileName: "",
  diaryForm: {
    useredName: "",
    imageFile: [],
    date: "",
    flowerName: "",
    title: "",
    descreption: "",
  },
};

const diary = handleActions(
  {
    [POST_DIARYPOST]: (state) => ({
      ...state,
      sendCheck: true,
    }),
    [POST_DIARYPOST_SUCCESS]: (state, action) => ({
      ...state,
      sendCheck: false,
      diaryForm: {
        useredName: action.playload.useredName,
        imageFile: action.playload.imageFile,
        date: action.playload.date,
        flowerName: action.playload.flowerName,
        title: action.playload.title,
        descreption: action.playload.descreption,
      },
    }),
    [GET_DIARYGET]: (state) => ({
      ...state,
      sendCheck: true,
    }),
    [GET_DIARYGET_SUCCESS]: (state, action) => ({
      ...state,
      sendCheck: false,
      diaryData: action.playload,
    }),
    [POST_DELETE]: (state) => ({
      ...state,
    }),
  },
  initialState
);

export default diary;
