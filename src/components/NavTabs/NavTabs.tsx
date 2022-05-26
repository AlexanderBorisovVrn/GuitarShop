import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavTabs.module.scss";
const { Tab_Link, List_Item,List } = styles;
type Props = {};

interface ILink {
  label: string;
  to: string;
}
const navLinks: ILink[] = [
  { label: "electric", to: "electric-guitars/" },
  { label: "acoustic", to: "acoustic-guitars/" },
  { label: "basses", to: "electric-basses/" },
  { label: "acoustasonic", to: "acoustasonic-guitars/" },
];

export default function NavTabs({}: Props) {
  const linkStyles = [Tab_Link, "_Hover_Underline"].join(" ");

  const links = navLinks.map((link) => {
    return (
      <React.Fragment key={link.label}>
        <li className={List_Item}>
          <Link to={link.to} className={linkStyles}>
            {link.label}
          </Link>
        </li>
      </React.Fragment>
    );
  });

  return <ul className={List}>{links}</ul>;
}
