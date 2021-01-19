import React, { useState, useEffect } from "react";
import Api from "../../Util/Api";
import {
  Container,
  Title,
  Card,
  CardContainer,
  CardTitle,
  Img,
  Button,
  Div,
} from "./style";

export default function Casting({ movie }) {
  const [casters, setCasters] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    Api.get(`${movie}/credits`).then((result) => {
      setCasters(result.data.cast);
    });
  }, [movie]);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const RenderItems = () => {
    if (isOpen) {
      return casters;
    } else {
      return casters.slice(0, 4);
    }
  };

  return (
    <Container>
      <Div>
        <Title>Casting</Title>
        <Button onClick={toggle}>{isOpen ? "Less" : "More"}</Button>
      </Div>
      <Card>
        {RenderItems().map((caster) => (
          <CardContainer key={caster.id}>
            <Img
              src={`https://image.tmdb.org/t/p/w300${caster.profile_path}`}
              alt="caster"
            ></Img>
            <CardTitle>{caster.name}</CardTitle>
          </CardContainer>
        ))}
      </Card>
    </Container>
  );
}
