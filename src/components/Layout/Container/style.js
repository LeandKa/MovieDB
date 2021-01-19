import styled from "styled-components";

export const Main = styled.div`
  background: url(${props => props.Url}) ${props => (props.Details ? 'no-repeat top center fixed;' : 'no-repeat center center fixed;')}; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: ${ props => props.Details ? '100% 100%' : 'cover'};
  display: flex;
  flex-direction: column;
  height:auto;
`;