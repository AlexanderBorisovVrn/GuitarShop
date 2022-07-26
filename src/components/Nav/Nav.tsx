import { ReactNode } from "react";
import CSS from 'csstype'

type Props = {
  children: ReactNode;
  direction?: "row" | "column";
  space?: boolean;
};

export default function Nav({ children, direction = "row", space }: Props) {
  const style:CSS.Properties = {
    display: "flex",
    flexDirection: direction,
    alignItems: "center",
    justifyContent: "center",
  };
  if (space) {
    style.justifyContent = "space-between";
  }
  return <ul style={style}>{children}</ul>;
}
