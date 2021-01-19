import styled from 'styled-components';


export const H2 = styled.h2`
  color:${({ theme }) => theme.colors.white};
  font-size:3.0rem;
  margin-top:7.0rem;
  text-align:center;
  font-family:${({ theme }) => theme.fonts.font};
  letter-spacing:0.5rem;
`

export const Title = styled.h2