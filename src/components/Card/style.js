import styled from "styled-components";

export const ContainerGeral = styled.ul`
  display:grid;
  grid-template-columns: repeat(4, 200px);
  grid-gap:2.0rem;
  justify-content:center;
  align-content:center;
  width:auto;
  @media(max-width:1130px){
    grid-template-columns:repeat(3,200px);
  }
  @media (max-width: 970px) {
    grid-template-columns:${ props => (props.Recomendations ? 'repeat(2,200px)' : 'repeat(3,200px)')};
   }
  @media (max-width: 730px) {
    grid-template-columns:${ props => (props.Recomendations ? 'repeat(2,200px)' : 'repeat(3,200px)')};
  }
  @media (max-width: 650px) {
    grid-template-columns:repeat(1,200px);
   }
`;

export const Container = styled.a`
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

export const Details = styled.div`
  display: flex;
  width:100%;
  height: 5rem;
  justify-content:center;
`;

export const Title = styled.h1`
  width:70%;
  color: white;
  text-align: center;
  align-self: center;
  font-size: 1.0rem;
  font-family:${({ theme }) => theme.fonts.font};
  margin-left:0.2rem;
  margin-bottom: 1.0rem;
`;

export const Ratings = styled.span`
  border-radius: 50%;
  margin-left: 10px;
  text-align: center;
  align-self: center;
  width: 18px;
  height: 18px;
  padding: 6px;
  border: 2px solid #666;
  color: ${({ theme }) => theme.colors.yellow};
`;
