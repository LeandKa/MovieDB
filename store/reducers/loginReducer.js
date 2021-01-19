import * as types from "../types";

const initialState = {
  userId: '',
  loginIsOk: false,
  Error: "",
  loading:false
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_LOGIN:
      return {
        ...state,
        loginIsOk: action.payload.loginIsOk,
        userId:action.payload.userId,
        loading:true
      };
    case types.GET_AUTH:
      return {
        ...state,
        loginIsOk: action.payload,
      };
    case types.GET_NOT_AUTH:
      return {
        ...state,
        loginIsOk: action.payload,
      };
    case types.GET_LOGOUT:
      return {
        ...state,
        loginIsOk: action.payload,
      };
    case types.GET_LOGIN_ERROR:
      return {
        ...state,
        Error: action.payload,
      };
    default:
      return state;
  }
};
