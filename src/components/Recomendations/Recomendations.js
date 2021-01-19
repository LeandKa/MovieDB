import React, { useEffect, useState } from "react";
import Api from "../../Util/Api";

import { Container, Title } from "./style";
import Card from "../Card/Card";
import Arrow from '../Layout/Arrow/Arrow';

export default function Recomendations({ movie }) {
  const [movies, setMovies] = useState([]);
  const [page,setPage] = useState(1);

  useEffect(() => {
    Api.get(`${movie}/recommendations`)
    .then(result =>{
      setMovies(result.data.results)
    })
  },[movie]);

  useEffect(() => {
    Api.get(`${movie}/recommendations`, {
      params: {
        page: page,
      },
    }).then((result) => {
      setMovies(result.data.results);
    });
  }, [page]);

  const increment = () => {
      setPage((prevState) => prevState + 1);
  };

  const decrement = () =>{
     setPage((prevState) => prevState - 1);
  }

  return (
    <Container>
      <Title> Recomendations </Title>
      <Arrow decrement={decrement} Recomendations='true' increment={increment}></Arrow>
      <Card Movie={movies} Recomendations='true'></Card>
    </Container>
  );
}
