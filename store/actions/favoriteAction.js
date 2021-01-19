import * as types from "../types";
import firebase from "../../firebase";

export const GetFavorite = () => async (dispatch) => {
  let local = localStorage.getItem("userId");
  console.log(local);
  const db = firebase.firestore();
  dispatch({ type: types.FETCH_LOADING });
  db.collection("UserFavorites")
    .where("userId", "==", local)
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        if (doc.data().movie.length > 0) {
        return dispatch({
            type: types.GET_FAVORITE,
            payload: doc.data().movie,
          });
        }
        dispatch({
          type: types.GET_FAVORITE_EMPTY,
          payload: true,
        });
      });
    })
    .catch(function (error) {
      dispatch({
        type: types.FAVORITE_NOT,
        payload: false,
      });
    });
};

export const addFavorite = (title, img, movieId) => async (dispatch) => {
  const userId = localStorage.getItem("userId");
  const db = firebase.firestore();
  dispatch({ type: types.FETCH_LOADING });
  var Ref = db.collection("UserFavorites").doc(userId);
  Ref.update({
    movie: firebase.firestore.FieldValue.arrayUnion({
      id: movieId,
      img: img,
      title: title,
    }),
  }).then((result) => {
    dispatch({
      type: types.ADD_FAVORITE,
      payload: true,
    });
  });
};

export const removeFavorite = (title, img, movieId) => async (dispatch) => {
  const userId = localStorage.getItem("userId");
  const db = firebase.firestore();
  console.log(title, img, movieId);
  dispatch({ type: types.FETCH_LOADING });
  var Ref = db.collection("UserFavorites").doc(userId);
  Ref.update({
    movie: firebase.firestore.FieldValue.arrayRemove({
      id: movieId,
      img: img,
      title: title,
    }),
  }).then((result) => {
    dispatch({
      type: types.REMOVE_FAVORITE,
      payload: true,
    });
    dispatch(GetFavorite());
  });
};

export const favorite = (id, img, title) => async (dispatch) => {
  const fire = firebase.firestore();
  const movies = fire.collection("UserFavorites");
  const query = movies.where("movie", "array-contains", {
    id: id,
    img: img,
    title: title,
  });
  dispatch({ type: types.FETCH_LOADING });
  query.get().then((snapshot) => {
    console.log(snapshot.docs);
    if (snapshot.docs.length > 0) {
    return  dispatch({
        type: types.SHOW_FAVORITE,
        payload: true,
      });
    } else {
      dispatch({
        type: types.FAVORITE_NOT,
        payload: false,
      });
    }
  });
};
