import React, { useEffect, useState } from "react";
import Container from "../src/components/Layout/Container/Container";
import Form from "../src/components/Form/Form";
import {useRouter} from 'next/router';
import {useDispatch, useSelector} from 'react-redux';
import { fetchLogin } from "../store/actions/loginAction";

export default function Login() {

  const {loginIsOk,Error} = useSelector(state=>state.login);
  const dispatch = useDispatch();

  const onSubmit = (data) =>{
    dispatch(fetchLogin(data));
  }

  return (
    <Container url="/Img/cinema.jpg" details={false}>
        <Form title={'Login'} show={true} error={Error} onSubmit={onSubmit}></Form>
    </Container>
  );
}
