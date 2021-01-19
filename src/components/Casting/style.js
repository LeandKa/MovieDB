import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  background: ${({ theme }) => theme.colors.white};
  align-self: center;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
`;

export const Title = styled.h2`
  float: left;
  color: #343a40;
  font-size: 2rem;
  margin-left: 1rem;
`;

export const Button = styled.button`
  width:auto;
  align-self:center;
  border:none;
  background:black;
  color:white;
  cursor:pointer;
  height:40%;
  &:hover{
    cursor:pointer;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.red};
    color: rgb(255, 30, 0);
    transition: all 0.2s ease-out;
    opacity: 0.8;
    outline:none;
  }
  &:focus{
    outline:none;
  }
`;

export const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 200px);
  grid-gap: 2rem;
  justify-content: center;
  align-content: center;
  width: auto;
  @media(max-width:1130px){
    grid-template-columns:repeat(3,200px);
  }
  @media (max-width: 875px) {
    grid-template-columns:repeat(2,200px);
   }
  @media (max-width: 650px) {
    grid-template-columns:repeat(1,200px);
   }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  text-decoration:none;
  position: relative;
  border: 0;
  border-radius: 10px;
  box-shadow: 0 6px 10px -4px rgba(0, 0, 0, 0.15);
  background-color: black;
  top: 0;
  transition: all 0.1s ease-in-out;
  &:hover {
    top: -10px;
  }
`;

export const CardTitle = styled.h1`
  width:70%;
  color: white;
  text-align: center;
  align-self: center;
  font-size: 1.0rem;
  font-family:${({ theme }) => theme.fonts.font};
  margin-left:0.2rem;
  margin-bottom: 1.0rem;
`;

export const Img = styled.img`
  width: auto;
  max-height:300px;
  min-height:300px;
  border-radius: 12px;
  border: 2px solid black;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  box-shadow: 0 6px 10px -4px rgba(0, 0, 0, 0.15);
`;