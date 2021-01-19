import React, { useEffect } from "react";
import { Main } from "./style";

export default function Container({ url,details, children }) {
  return (
    <div>
      <Main Url={url} Details={details}>{children}</Main>
    </div>
  );
}
