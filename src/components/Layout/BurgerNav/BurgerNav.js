import React, { useEffect } from "react";
import { Ul, Button, LiA } from "./style.js";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuth, fetchLogout } from "../../../../store/actions/loginAction";

export default function BurgerNav({ open }) {
  const { loginIsOk } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAuth());
  }, []);

  const onClick = () => {
    dispatch(fetchLogout());
  };

  return (
    <Ul open={open}>
      <li>
        {loginIsOk ? (
          <Button onClick={onClick}>Logout</Button>
        ) : (
          <Button href="/login">Login</Button>
        )}
      </li>
      <li>
        {loginIsOk ? (
          <LiA href="/favorites">Favorites</LiA>
        ) : (
          <React.Fragment>
            <LiA href="https://github.com/LeandKa">GitHub</LiA>
          </React.Fragment>
        )}
      </li>
      <li>
        <LiA href="/">Popular</LiA>
      </li>
    </Ul>
  );
}
