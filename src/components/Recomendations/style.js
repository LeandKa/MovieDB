import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    background: ${({ theme }) => theme.colors.white};
    align-self: center;
    width: 80%;
    flex-wrap:wrap;
`;

export const Title = styled.h2`
  float:left;
  color:#343a40;
  font-size:2.0rem;
  margin-left:1.0rem;
`
