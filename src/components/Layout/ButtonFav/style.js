import styled from 'styled-components';

export const Button = styled.button`
  background:${ props => props.Status ? 'rgb(217, 30, 24)' : 'rgba(0, 177, 106, 1)'};
  color:white;
  border:none;
  font-size:1.0rem;
  height:2.0rem;
  text-align:center;
  letter-spacing:0.2rem;
  cursor:pointer;
  width:auto;
  font-family:${({ theme }) => theme.fonts.font};
  margin-left:3.0rem;
  margin-bottom:1.0rem;
  &:hover{
    border:2px solid black;
  }
`;