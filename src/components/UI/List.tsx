import { ReactNode } from "react";
import CSS from "csstype";

type ListDirection =
  | "row"
  | "column"
  | undefined
  | "row-reverse"
  | "column-reverse";
type Props = {
  children: ReactNode;
  direction?: ListDirection;
  sx?: CSS.Properties;
};

export default function List({ children, direction = "row", sx}: Props) {
  const style: CSS.Properties = {
    display: "flex",
    flexDirection: direction,
    flexWrap: "wrap",
    listStyle: "none",
  };
  const currentStyles = {...style,...sx}

  return <ul style={currentStyles}>{children}</ul>;
}
