import React, { useEffect, useState } from "react";
import Header from "../src/components/Layout/Header/Header";
import Container from '../src/components/Layout/Container/Container';
import Title from "../src/components/Title/Title";
import Card from "../src/components/Card/Card";
import Api from "../src/Util/Api";
import Loading from "../src/components/Loading/Loading";
import Arrow from "../src/components/Layout/Arrow/Arrow";
import ArrowBottom from '../src/components/Layout/ArrowBottom/ArrowBottom';

export default function Home() {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [lenght, setLenght] = useState(0);

  useEffect(() => {
    Api.get("/popular", {
      params: {
        page: page,
      },
    }).then((result) => {
      setTimeout(() => {
        setLenght(result.data.total_pages);
        setMovie(result.data.results);
        setLoading(false);
      }, 2000);
    });
  }, []);

  useEffect(() => {
    Api.get("/popular", {
      params: {
        page: page,
      },
    }).then((result) => {
      setMovie(result.data.results);
      console.log(movie)
    });
  }, [page]);

  const increment = () => {
      setPage((prevState) => prevState + 1);
  };

  const decrement = () =>{
     setPage((prevState) => prevState - 1);
  }


  return (
    <Container url="/Img/cinema.jpg" details={false}>
      <Header></Header>
      <Title TitlePage={"Popular"}></Title>
      {loading ? (
        <Loading message={"Aguarde o carregamento"}></Loading>
      ) : (
        <React.Fragment>
          <Arrow decrement={decrement} increment={increment}></Arrow>
          <Card Movie={movie} fetch={fetch} dataLength={lenght}></Card>
          <ArrowBottom></ArrowBottom>
          
        </React.Fragment>
      )}
    </Container>
  );
}
