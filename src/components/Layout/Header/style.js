import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 1rem;
  z-index: 5;
  width:100%;
  height:2.0rem;
  background-color:rgba(0, 0, 0, 0.4);
  position: fixed;

`;

export const A = styled.a`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  font-size: 2.5rem;
  @media (max-width: 650px) {
    font-size:1.5rem;
   }
`;

export const UL = styled.ul`
  display: grid;
  margin-top: 0.5rem;
  grid-template-columns: repeat(4, auto);
  grid-gap: 3rem;
  @media(max-width:800px){
    display:none;
  }
`;

export const Li = styled.li`
  padding: 0.5rem;
  list-style: none;
`;

export const LiA = styled.a`
  text-decoration: none;
  padding: 0.5rem;
  font-size: 1.0rem;
  color: ${({ theme }) => theme.colors.white};
  &:hover{
    cursor: pointer;
    color: ${({ theme }) => theme.colors.red};
    border-bottom:2px solid red;
    color: rgb(255, 30, 0);
    transition: all 0.2s ease-out;
    opacity: 0.8;
  }
`;

export const Button = styled.a`
  text-decoration: none;
  border:none;
  padding:0.5rem;
  background:none;
  font-size: 1.0rem;
  color: ${({ theme }) => theme.colors.white};
  &:hover {
    border-bottom:2px solid red;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.red};
    color: rgb(255, 30, 0);
    transition: all 0.2s ease-out;
    opacity: 0.8;
  }
`;
