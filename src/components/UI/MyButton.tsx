import React from "react";
import CSS from 'csstype';
import style from "./UI.module.scss";

type Props = {
  children: any;
  style?:CSS.Properties;
  color?: "primary" | "secondary" | "error";
  type: "submit" | "button";
};
const { Primary, Secondary, Error, Btn, Btn_H } = style;

export default function MyButton({
  children,
  style={},
  color = "primary",
  type = "button",
}: Props) {
  
  const buttonColorStyle = {
    primary: (initial: string[]) => [Primary, ...initial].join(" "),
    secondary: (initial: string[]) => [Secondary, ...initial].join(" "),
    error: (initial: string[]) => [Error, ...initial].join(" "),
  }[color]([Btn, Btn_H,'my-xl']);

  return (
    <button type={type} style={style} className={buttonColorStyle}>
      {children}
    </button>
  );
}
