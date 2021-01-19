import React from "react";
import { Container, Span } from "./style";
import { FaArrowCircleRight,FaArrowCircleLeft } from "react-icons/fa";

export default function Arrow({decrement,increment,Recomendations}) {

  return (
    <Container>
      <Span onClick={decrement} Recomendations={Recomendations}><FaArrowCircleLeft/></Span>
      <Span onClick={increment} Recomendations={Recomendations}><FaArrowCircleRight/></Span>
    </Container>
  );
}
