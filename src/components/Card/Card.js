import React from "react";
import {
  ContainerGeral,
  Container,
  Img,
  Details,
  Title,
  Ratings,
} from "./style";
import Link from "next/link";

export default function Card({ Movie, Recomendations }) {
  return (
    <ContainerGeral Recomendations={Recomendations}>
      {Movie.map((movie, index) => (
        <Link key={movie.id} href="/movieDetails/[movieId]"  as={`/movieDetails/${movie.id}`}>
          <Container>
            <Img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt="photo-movie"
            ></Img>
            <Details>
              <Title>{movie.original_title}</Title>
              <Ratings>{movie.vote_average}</Ratings>
            </Details>
          </Container>
        </Link>
      ))}
    </ContainerGeral>
  );
}
