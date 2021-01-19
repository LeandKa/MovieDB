import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 50%;
  text-align: center;
  align-self: center;
`;

export const Title = styled.h1`
  width: 100%;
  color: white;
  text-align: center;
  align-self: center;
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fonts.font};
  margin-left: 0.2rem;
  margin-bottom: 1rem;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  margin-top: 200px;
  border-radius: 20px 20px 20px 20px;
  background-color: rgba(0, 0, 0, 0.4);
  align-self:center;
  margin-bottom: 40px;
`;

export const Label = styled.label`
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fonts.font};
  margin-left: 0.2rem;
`;

export const Input = styled.input`
  color: white;
  background-color: ${({ theme }) => theme.colors.black};
  border: 3px solid white;
  padding: 1.0rem;
  margin: 10px;
  height: auto;
  width:auto;
  font-size:1.0rem;
  border-radius: 20px 20px 20px 20px;
  text-align:center;
  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  color: white;
  background-color: ${({ theme }) => theme.colors.black};
  border: 3px solid white;
  text-align:center;
  align-self:center;
  padding: 10px;
  width:auto;
  margin: 10px;
  border-radius: 20px 20px 20px 20px;
  &:hover {
    ouline:none;
    cursor:pointer;
    color:red;
    border:3px solid red;
  }
  &:focus{
    outline:none;
  }
`;

export const New = styled.a`
  text-decoration:none;
  color:white;
  margin:1.0rem;
  width:50%;
  align-self:center;
  &:hover{
    cursor: pointer;
    color: ${({ theme }) => theme.colors.red};
    color: rgb(255, 30, 0);
    transition: all 0.2s ease-out;
    opacity: 0.8;
  }
`
