import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { wrapStore } from "react-chrome-redux";

const store = createStore(rootReducer, applyMiddleware(thunk));

wrapStore(store, {
  portName: "chrome_ext"
});

export default store;
