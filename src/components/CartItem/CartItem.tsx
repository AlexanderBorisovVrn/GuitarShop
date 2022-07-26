import { IItem } from "../../store/CartStore";
import CartCounter from "../../CartCounter/CartCounter";
import style from "./CartItem.module.scss";
const { Wrap, Item, Img, Price, Count, Name, Check } = style;
type Props = {
  item?: IItem;
  deleteItemGroupFromCart: (id: number | string) => void;
};

export default function CartItem({ item, deleteItemGroupFromCart }: Props) {
  const optionsCount = new Array(10).fill(null).map((el, i) => {
    return (
      <option key={i} value={i + 1}>
        {i + 1}
      </option>
    );
  });

  return (
    <li className={Wrap}>
      <ul className={Item}>
        <li className={Check}>
          <input type="checkbox" />
        </li>
        <li className={Img}>
          <img src={item?.img} alt="" />
        </li>
        <li className={Name}>
          <div>{item?.title}</div>
          <div>Color: {item?.color}</div>
        </li>
        <li className={Price}>
          <div>Price: ${item?.price}</div>
          <div>Discount: $100</div>
        </li>
        <li className={Count}>
          <div>
            <CartCounter id={item!.id} />
          </div>
          <span  onClick={() => deleteItemGroupFromCart(item!.id)}>Удалить</span>
        </li>
      </ul>
    </li>
  );
}
