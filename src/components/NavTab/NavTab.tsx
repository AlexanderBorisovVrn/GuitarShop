import { Link } from "react-router-dom";
import { ILink } from "../../types/types";
import styles from "./NavTab.module.scss";
import CSS from "csstype";
const { Tab_Link, List_Item, List } = styles;

type Props = {
  children: ILink;
  hover?: boolean;
  underline?: boolean;
  outline?: boolean;
  height?: boolean;
  styles?: CSS.Properties;
};

export default function NavTabs({
  children,
  hover,
  underline,
  outline,
  height,
  styles,
}: Props) {
  const style = [Tab_Link];

  if (hover) {
    style.push("_Hover");
  }
  if (underline) {
    style.push("_Underline");
  }
  if (outline) {
    style.push("_Outline");
  }
  if (height) {
    style.push("H100");
  }

  return (
    <li className={style.join(" ")} key={children.label} style={styles}>
      <Link to={children.to}>{children.label}</Link>
    </li>
  );
}
