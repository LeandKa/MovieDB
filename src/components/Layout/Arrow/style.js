import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Span = styled.span`
  color: ${ props => (props.Recomendations ? 'black' : 'white')};
  font-size:3.0rem;
  cursor:pointer;
  &:hover{
    cursor: pointer;
    color: ${({ theme }) => theme.colors.red};
    color: rgb(255, 30, 0);
    transition: all 0.2s ease-out;
    opacity: 0.8;
  }
`;
