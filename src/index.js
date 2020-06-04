import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import rootReducer from "./models/index";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";

import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);

const persistor = persistStore(store);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </PersistGate>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
