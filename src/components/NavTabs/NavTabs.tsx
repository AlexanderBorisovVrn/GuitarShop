import React from 'react'
import { Link } from "react-router-dom";
import List from "../UI/List";
import ListItem from "../UI/ListItem";
import styles from "./NavTabs.module.scss";
const { TabLink } = styles;
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
  const linkStyles = [TabLink, '_Hover_Underline'].join(" ");

  const links = navLinks.map((link) => {
    return (
      <React.Fragment key={link.label}>
        <ListItem alignItems="center" sx={{margin:'0 5px'}} >
          <Link to={link.to} className={linkStyles}>
            {link.label}
          </Link>
        </ListItem>
      </React.Fragment>
    );
  });

  return <List>{links}</List>;
}
