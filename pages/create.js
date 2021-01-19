import React, { useEffect, useState } from "react";
import Container from "../src/components/Layout/Container/Container";
import Form from "../src/components/Form/Form";
import {fetchCreateLogin}from '../store/actions/loginAction';
import {useDispatch, useSelector} from 'react-redux';

export default function create() {

  const {loginIsOk,Error} = useSelector(state=>state.login);
  const dispatch = useDispatch();

  const onSubmit = (data) => {
     dispatch(fetchCreateLogin(data));
  };

  return (
    <Container url="/Img/cinema.jpg" details={false}>
        <Form
          title={"Create"}
          show={false}
          error={Error}
          onSubmit={onSubmit}
        ></Form>
    </Container>
  );
}
