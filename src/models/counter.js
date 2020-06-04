import { handleActions, createAction } from "redux-actions";
const INCREASE = "counter/INCREASE";

export const increase = createAction(INCREASE);

const initialState = {
  number: 0,
};

const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
  },
  initialState
);

export default counter;
