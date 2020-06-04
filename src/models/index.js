import { combineReducers } from "redux";
import counter from "./counter";
import flowerDatas from "./flowerDatas";
import flowerLoad from "./flowerLoad";
import flowerDataDetail from "./flowerDataDetail";
import login from "../models/user/login";
import diary from "./diary/diary";
import comment from "./diary/comment";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["login"],
};

const rootReducer = combineReducers({
  counter,
  flowerDatas,
  flowerLoad,
  flowerDataDetail,
  login,
  diary,
  comment,
});

export default persistReducer(persistConfig, rootReducer);

//export default rootReducer;
