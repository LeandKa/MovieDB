import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Api from "../../src/Util/Api";

import Container from "../../src/components/Layout/Container/Container";
import Header from "../../src/components/Layout/Header/Header";
import Loading from "../../src/components/Loading/Loading";
import MovieDetailsComponent from "../../src/components/MovieDetails/MovieDetails";

import { Div } from "../../styled/Movie-Details/style";
import Recomendations from "../../src/components/Recomendations/Recomendations";
import ArrowBottom from '../../src/components/Layout/ArrowBottom/ArrowBottom';
import Casting from '../../src/components/Casting/Casting';

export default function MovieDetails() {
  const router = useRouter();
  const { movieId } = router.query;
  const [movie, SetMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Api.get(`${movieId}`).then((result) => {
        SetMovie(result.data);
        setLoading(false);
    });
  }, [movieId]);


  return (
    <Container
      url={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      details={true}
    >
      <Header></Header>
      {loading ? (
        <Loading message={"Aguarde o Carregamento"}></Loading>
      ) : (
        <Div>
          <MovieDetailsComponent movie={movie}></MovieDetailsComponent>
          <Casting movie={movie.id}></Casting>
          <Recomendations movie={movie.id}></Recomendations>
        </Div>
      )}
      <ArrowBottom Recomendations={Recomendations}></ArrowBottom>
    </Container>
  );
}
