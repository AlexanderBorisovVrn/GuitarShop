import style from "./OrderList.module.scss";
import CartItem from "../CartItem/CartItem";
import { IItem } from "../../store/CartStore";
import { ShopContext } from "../Contexts/ShopContext/ShopContext";
import { useContext } from "react";

const { Item_List, Top } = style;
type Props = {
  orderList: IItem[];
};

export default function OrderList({ orderList }: Props) {
  const { deleteItemGroupFromCart } = useContext(ShopContext);
  const cartItemList = orderList.map((orderItem: IItem) => (
    <CartItem
      key={orderItem.id}
      item={orderItem}
      deleteItemGroupFromCart={deleteItemGroupFromCart}
    />
  ));

  return (
    <>
      <div className={Top}></div>
      <hr />
      <ul className={Item_List}>{cartItemList}</ul>
    </>
  );
}
