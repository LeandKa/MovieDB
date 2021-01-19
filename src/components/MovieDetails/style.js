import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  margin-top: 130px;
  align-self: center;
  background: linear-gradient(300deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%);
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Img = styled.img`
  width: 27%;
  height: auto;
  @media (max-width: 1000px) {
    width: auto;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.yellow};
  margin-right: 40px;
  float: left;
  margin-left: 20px;
  font-style: ${({ theme }) => theme.fonts.font};
  @media (max-width: 1000px) {
    text-align: center;
  }
`;

export const Ratings = styled.span`
  border-radius: 50%;
  margin-left: 10px;
  text-align: center;
  align-self: center;
  width: 18px;
  height: 18px;
  padding: 6px;
  border: 2px solid #fff;
  color: ${({ theme }) => theme.colors.yellow};
`;

export const FavoriteDiv = styled.div`
  width:100%;
`;

export const Description = styled.p`
  font-size: 1.2em;
  font-weight: 300;
  margin:1.0rem;
  color: ${({ theme }) => theme.colors.white};
`;

export const Genre = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 40px;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  margin-left: 20px;
  @media (max-width: 650px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const GenreSpan = styled.span`
  padding: 0.5rem;
  background: #ffc107;
  margin: 0.5rem;
  font-family: ${({ theme }) => theme.fonts.font};
  color: #212529;
  border-radius: 0.5rem;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background: black;
  opacity: 0.9;
  width: 100%;
  height: 10%;
  margin-top: auto;
  align-self: center;
  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

export const Span = styled.div`
  margin: 1rem;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.font};
  font-size: 1rem;
`;
