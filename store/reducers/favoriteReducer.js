import * as types from "../types";

const initialState = {
  favoriteShow: false,
  loading: false,
  favoriteMovies: [],
  empty: false,
};

export const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_FAVORITE:
      return {
        ...state,
        favoriteShow: action.payload,
        loading: false,
      };
    case types.REMOVE_FAVORITE:
      return {
        ...state,
        favoriteShow: action.payload,
        loading: false,
      };
    case types.FAVORITE_NOT:
      return {
        ...state,
        favoriteShow: action.payload,
        loading: false,
      };
    case types.SHOW_FAVORITE:
      return {
        ...state,
        favoriteShow: action.payload,
        loading: false,
      };
    case types.GET_FAVORITE:
      return {
        ...state,
        favoriteMovies: action.payload,
        loading: false,
        empty: false,
        favoriteShow: true,
      };
    case types.GET_FAVORITE_EMPTY:
      return {
        ...state,
        empty: action.payload,
        loading: false,
      };
    case types.FETCH_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
