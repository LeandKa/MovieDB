import React from "react";
import {
  Container,
  FormContainer,
  Input,
  Label,
  Title,
  Button
} from "./style";
import Erro from '../Layout/Erros/Erro';
import{useForm} from 'react-hook-form';
import LoginLink from '../Layout/LoginLink/LoginLink';


export default function Form({ title , onSubmit, show, error }) {
  
  const { register, handleSubmit, watch, errors } = useForm();
  
 
  return (
    <Container>
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <Erro message={error}></Erro>
          <LoginLink link={"/"} text={'Back to HomePage'}></LoginLink>
          <Title>{title}</Title>
          {errors.email && <Erro message={'Field is required'}></Erro>}
          <Label>Email</Label>
          <Input
            type="text"
            name="email"
            ref={register({ required: true })}
          ></Input>
          {errors.password && <Erro message={'Field is required'}></Erro>}
          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            ref={register({ required: true })}
          ></Input>
          <Button>{title}</Button>
          {show ? <LoginLink link={"/create"} text={'New Here? Create a account here'}></LoginLink> : <LoginLink link={"/login"} text={"Go to login"}></LoginLink>}
        </FormContainer>
    </Container>    
  );
}
