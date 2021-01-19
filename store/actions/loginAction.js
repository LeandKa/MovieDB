import * as types from "../types";
import firebase from "../../firebase";
import Router from "next/router";

export const fetchLogin = (data) => async (dispatch) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(data.email, data.password)
    .then((result) => {
      Router.push("/");
      localStorage.setItem('userId',result.user.uid.toString())
      dispatch({
        type: types.GET_LOGIN,
        payload: {
          loginIsOk: true,
          userId: result.user.uid.toString(),
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: types.GET_LOGIN_ERROR,
        payload: error.message,
      });
    });
};

export const fetchCreateLogin = (data) => async (dispatch) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(data.email, data.password)
    .then((result) => {
      firebase
        .firestore()
        .collection("UserFavorites")
        .doc(result.user.uid.toString())
        .set({
          movie: [],
          userId: result.user.uid.toString(),
        })
        .then(function (docRef) {
          localStorage.setItem('userId',result.user.uid.toString())
          dispatch({
            type: types.GET_LOGIN,
            payload: {
              loginIsOk: true,
              userId: result.user.uid.toString(),
            },
          });
          Router.push("/");
        });
    })
    .catch((error) => {
      dispatch({
        type: types.GET_LOGIN_ERROR,
        payload: error.message,
      });
    });
};

export const fetchLogout = () => async (dispatch) => {
  firebase
    .auth()
    .signOut()
    .then(function () {
      localStorage.setItem('userId','')
      dispatch({
        type: types.GET_LOGOUT,
        payload: false,
      });
      if(Router.pathname === '/favorites'){
        Router.push('/')
     }
    });
};

export const fetchAuth = () => async (dispatch) => {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      dispatch({
        type: types.GET_AUTH,
        payload: true,
      });
    } else {
      dispatch({
        type: types.GET_NOT_AUTH,
        payload: false,
      });
    }
  });
};


