import React from "react";
import { Span } from "./style";
import { FaArrowAltCircleUp } from "react-icons/fa";

export default function ArrowBottom({Recomendations}) {

  const handleOnClick = () =>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


  return (
    <Span Recomendations={Recomendations} id="scrolltotop" onClick={handleOnClick}>
      <FaArrowAltCircleUp></FaArrowAltCircleUp>
    </Span>
  );
}
