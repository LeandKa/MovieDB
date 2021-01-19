import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import reducers from "./reducers";

const initialState = {};

const makeStore = () => {
  // Create store
  const store = createStore(reducers,initialState,composeWithDevTools(applyMiddleware(thunk)));

  // Return store
  return store;
};

// export an assembled wrapper
export const storeWrapper = createWrapper(makeStore, { debug: false });