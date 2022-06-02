import React from "react";
import style from "./OrderList.module.scss";
import CartItem from "../CartItem/CartItem";
const { Item_List, Top } = style;

type Props = {};

export default function OrderList({}: Props) {
  return (
    <>
      <div className={Top}></div>
      <hr />
      <ul className={Item_List}>
        <CartItem />
        <CartItem />
        <CartItem />
      </ul>
    </>
  );
}
