import React from "react";
import { IProduct } from "../../types/types";
import style from "./CartItem.module.scss";
const { Wrap, Item, Img, Price, Count, Name,Check } = style;
type Props = { item?: IProduct };

export default function CartItem({ item }: Props) {
  return (
    <li className={Wrap}>
      <ul className={Item}>
        <li className={Check}>
          <input type="checkbox" />
        </li>
        <li className={Img}>
          <img
            src="https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10001/0972013288_fen_ins_frt_1_rr.jpg"
            alt=""
          />
        </li>
        <li className={Name}>
          <span>american professional telecaster</span>
          <span>Color black</span>
        </li>
        <li className={Price}>
          <span>$2200</span>
          <span>$100</span>
        </li>
        <li className={Count}>
          <select name="count" id="count">
            {new Array(10).fill(null).map((el,i)=>{
              return <option value={i+1}>{i+1}</option>
            })}
          </select>
        </li>
      </ul>
    </li>
  );
}
