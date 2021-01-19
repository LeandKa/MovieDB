import React, { useState } from "react";
import Loader from "react-loader-spinner";
import { Container, H2 } from "./style";

export default function Loading({ message, fav }) {
  return (
    <Container Fav={fav}>
      {fav ? (
        <React.Fragment>
          <Loader type="Rings" color="red" height={60} width={80}></Loader>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <H2>{message}</H2>
          <Loader type="Rings" color="red" height={200} width={150}></Loader>
        </React.Fragment>
      )}
    </Container>
  );
}
