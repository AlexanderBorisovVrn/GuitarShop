import React from "react";
import style from "./OrderList.module.scss";
import CartItem from "../CartItem/CartItem";
import { IItem } from "../../store/CartStore";
const { Item_List, Top } = style;

type Props = {
  orderList: IItem[];
};

export default function OrderList({ orderList }: Props) {
  const cartItemList = orderList.map((orderItem: IItem) => (
    <CartItem key={orderItem.id} item={orderItem} />
  ));
 
  return (
    <>
      <div className={Top}></div>
      <hr />
      <ul className={Item_List}>{cartItemList}</ul>
    </>
  );
}
