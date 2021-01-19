import React, { useState } from 'react';
import { BurgerStyle } from './style.js';
import BurgerNav from '../BurgerNav/BurgerNav';

export default function Burger() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <BurgerStyle open={open} onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </BurgerStyle>
      <BurgerNav open={open}></BurgerNav>
    </>
  );
}