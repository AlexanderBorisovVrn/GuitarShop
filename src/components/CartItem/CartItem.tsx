import { IItem } from "../../store/CartStore";
import style from "./CartItem.module.scss";
const { Wrap, Item, Img, Price, Count, Name, Check } = style;
type Props = { item?: IItem };

export default function CartItem({ item }: Props) {
  const optionsCount = new Array(10).fill(null).map((el, i) => {
    return <option value={i + 1}>{i + 1}</option>;
  });
  return (
    <li className={Wrap}>
      <ul className={Item}>
        <li className={Check}>
          <input type="checkbox" />
        </li>
        <li className={Img}>
          <img
            src={item?.img}
            alt=""
          />
        </li>
        <li className={Name}>
          <span>{item?.title}</span>
          <span>{item?.color}</span>
        </li>
        <li className={Price}>
          <span>{item?.price}</span>
          <span>$100</span>
        </li>
        <li className={Count}>
          <select name="count" id="count">
            {optionsCount}
          </select>
        </li>
      </ul>
    </li>
  );
}
