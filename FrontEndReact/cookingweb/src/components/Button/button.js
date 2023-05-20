import React from "react";
import { Btn } from "./styles";

function Button({ color, func, text }) {
  return (
    <Btn color={color} onClick={func}>
      {text}
    </Btn>
  );
}

export default Button;
