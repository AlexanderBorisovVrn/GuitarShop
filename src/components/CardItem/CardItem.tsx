import React from "react";
import ListItem from "../UI/ListItem";
import { Link } from "react-router-dom";
import CSS from "csstype";
import style from "./CardItem.module.scss";
const { Img, Title, Options } = style;
type Props = {};

export default function CardItem({}: Props) {
  const styles: CSS.Properties = {
    display: "block",
    maxWidth: "100%",
    height: "30rem",
    padding: ".75rem",
  };
  return (
    <ListItem sx={styles}>
      <Link to='/'>
        <div className={Img}>image</div>
        <h3 className={Title}>title</h3>
        <div className={Options}>opt</div>
      </Link>
    </ListItem>
  );
}
