import React from "react";
import { Link } from "react-router-dom";
import style from "./CardItem.module.scss";
const { Img, Title, Options,Item } = style;
type Props = {};

export default function CardItem({}: Props) {

  return (
    <li className={Item}>
      <Link to='/'>
        <div className={Img}>image</div>
        <h3 className={Title}>title</h3>
        <div className={Options}>opt</div>
      </Link>
    </li>
  );
}
