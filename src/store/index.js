import { applyMiddleware, compose, createStore } from "redux";
import history from "./history";
import { routerMiddleware } from "connected-react-router";
import createRootReducer from "../reducers";

const initialState = {};

const store = createStore(
  createRootReducer(history),
  initialState,
  compose(applyMiddleware(routerMiddleware(history)))
);

export default store;
