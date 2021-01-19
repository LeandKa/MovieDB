import React, { useState, useEffect } from "react";
import Burger from "../Burger/Burger";
import {useRouter} from 'next/router';
import { useDispatch, useSelector } from "react-redux";
import { fetchAuth, fetchLogout } from "../../../../store/actions/loginAction";
import { Nav, A, UL, Li, LiA, Button } from "./style";

export default function Header() {
  const { loginIsOk} = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(fetchAuth());
  }, []);

  const onClick = () => {
    dispatch(fetchLogout());
  };

  return (
    <Nav>
      <A href="/">Movie</A>
      <UL>
        <Li>
          <LiA href="/">Popular</LiA>
        </Li>
        <Li>
          {loginIsOk ? (
            <Button onClick={onClick}>Logout</Button>
          ) : (
            <Button href="/login">Login</Button>
          )}
        </Li>
        {
          loginIsOk ?(
            <LiA href="/favorites">Favorites</LiA>
          ):(
            <React.Fragment></React.Fragment>
          )
        }
        <Li>
          <LiA href="https://github.com/LeandKa">GitHub</LiA>
        </Li>
      </UL>
      <Burger />
    </Nav>
  );
}
