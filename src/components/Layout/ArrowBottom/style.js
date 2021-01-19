import styled from "styled-components";

export const Span = styled.span`
  font-size:3.0rem;
  position:relative;
  top:-60px;
  right:-150px;
  width:50px;
  color: ${ props => (props.Recomendations ? 'black' : 'white')};
  cursor:pointer;
  &:hover{
    cursor: pointer;
    color: ${({ theme }) => theme.colors.red};
    color: rgb(255, 30, 0);
    transition: all 0.2s ease-out;
    opacity: 0.8;
  }
  @media (max-width: 1130px) {
    top:-60px;
    right:-100px;
  }
  @media(max-width:710px){
    right:-70px
  }
  @media(max-width:360px){
    right:-30px;
  }
`;
