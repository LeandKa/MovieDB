import React, { useEffect, useState } from "react";
import Header from "../src/components/Layout/Header/Header";
import firebase from "../firebase";
import Loading from "../src/components/Loading/Loading";
import Container from "../src/components/Layout/Container/Container";
import Title from "../src/components/Title/Title";
import {
  CardContainer,
  Card,
  CardTitle,
  Img,
  EmptyDiv,
  EmptyText,
} from "../styled/Favorite/style";
import { GetFavorite } from "../store/actions/favoriteAction";
import { useDispatch, useSelector } from "react-redux";
import Button from "../src/components/Layout/ButtonFav/ButtonFav";

export default function favorites() {
  const dispatch = useDispatch();
  const { favoriteMovies, loading,empty } = useSelector((state) => state.favorite);

  useEffect(() => {
    dispatch(GetFavorite());
  }, []);

  return (
    <Container url="/Img/cinema.jpg" details={false}>
      <Header></Header>
      <Title TitlePage={"Favorites Movies"}></Title>
      <React.Fragment>
        {loading ? (
          <Loading></Loading>
        ) : (
          <React.Fragment>
            {empty ? (
              <EmptyDiv>
                <EmptyText>No Favorites</EmptyText>
              </EmptyDiv>
            ) : (
              <Card>
                {favoriteMovies.map((move) => (
                  <CardContainer key={move.id}>
                    <Img
                      src={`https://image.tmdb.org/t/p/w300${move.img}`}
                      alt="caster"
                    ></Img>
                    <CardTitle>{move.title}</CardTitle>
                    <div style={{ width: "100%" }}>
                      <Button
                        movieId={move.id}
                        img={move.img}
                        title={move.title}
                      ></Button>
                    </div>
                  </CardContainer>
                ))}
              </Card>
            )}
          </React.Fragment>
        )}
      </React.Fragment>
    </Container>
  );
}
