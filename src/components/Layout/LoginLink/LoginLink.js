import React from "react";
import { Span } from "./style";
import Link from "next/link";

export default function LoginLink({ link, text}) {
  return (
    <Link href={link} passHref>
      <Span>{text}</Span>
    </Link>
  );
}
