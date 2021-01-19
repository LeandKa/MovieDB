import React, { useEffect, useState } from "react";
import {
  Container,
  Img,
  Ratings,
  Details,
  Title,
  Description,
  Info,
  Span,
  GenreSpan,
  Genre,
  Div,
  FavoriteDiv,
} from "./style";
import FormatDate from "../../Util/FormatDate";
import Loading from "../Loading/Loading";
import Button from "../Layout/ButtonFav/ButtonFav";
import { useDispatch, useSelector } from "react-redux";
import { favorite } from "../../../store/actions/favoriteAction";

export default function MovieDetails({ movie }) {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.favorite);

  useEffect(() => {
    dispatch(favorite(movie.id, movie.poster_path, movie.title));
  }, [movie]);

  return (
    <Container>
      <Img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt="photo-movie"
      ></Img>
      <Details>
        <Div>
          <Title>{movie.original_title}</Title>
          <Ratings>{movie.vote_average}</Ratings>
        </Div>
        <FavoriteDiv>
          {loading ? (
            <Loading fav={loading}></Loading>
          ) : (
            <Button
              movieId={movie.id}
              img={movie.poster_path}
              title={movie.original_title}
            ></Button>
          )}
        </FavoriteDiv>
        <Description>{movie.overview}</Description>

        <Genre>
          <Span>Genre:</Span>
          {movie.genres.map((genre) => (
            <GenreSpan key={genre.id}>{genre.name}</GenreSpan>
          ))}
        </Genre>

        <Info>
          <Span>Data Release:{movie.release_date}</Span>
          <Span>
            Budget:
            {movie.budget.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </Span>
          <Span>
            Duration:<FormatDate seconds={movie.runtime}></FormatDate>
          </Span>
        </Info>
      </Details>
    </Container>
  );
}
