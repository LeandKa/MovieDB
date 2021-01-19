import React, { useEffect, useState } from "react";
import { Button } from "./style";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  removeFavorite,
} from "../../../../store/actions/favoriteAction";

export default function ButtonFav({ title, img, movieId }) {
  const dispatch = useDispatch();
  const { favoriteShow } = useSelector((state) => state.favorite);


  useEffect(()=>{
     console.log(favoriteShow);
  },[favoriteShow])

  const addClick = () => {
    dispatch(addFavorite(title, img, movieId));
  };

  const removeClick = () => {
    dispatch(removeFavorite(title, img, movieId));
  };

  return (
    <React.Fragment>
      {favoriteShow ? (
        <Button Status={favoriteShow} onClick={removeClick}>
          <FaHeart style={{ marginRight: "0.2rem" }} />
          Remove
        </Button>
      ) : (
        <Button Status={favoriteShow} onClick={addClick}>
          <FaHeart style={{ marginRight: "0.2rem" }} />
          Add
        </Button>
      )}
    </React.Fragment>
  );
}
