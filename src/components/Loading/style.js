import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: ${(props) => (props.Fav ? "transparent" : "black")};
  height: ${(props) => (props.Fav ? "10%" : "100vh")};
  text-align:  ${(props) => (props.Fav ? "" : "center")};
  margin-left: ${(props) => (props.Fav ? "1.0rem;" : "0")};
  justify-content: ${(props) => (props.Fav ? "flex-start" : "center")};
`;

export const H2 = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  margin: 5rem;
  font-size: 1.5rem;
`;
