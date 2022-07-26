import { Link } from "react-router-dom";
import style from "./CardItem.module.scss";
import { IProduct } from "../../types/types";
import CartCounter from "../../CartCounter/CartCounter";
import Counter from "../Counter/Counter";
type Props = {
  item: IProduct;
};

const { Img, Title, Item, Options, Price, Count } = style;

export default function CardItem({ item }: Props) {
  const { category, model } = item;
  const { name, img, id, price } = model;
  const link = `/${category}/${id}`;

  const transformName = name.toLowerCase();
  return (
    <li className={Item}>
      <Link to={link} style={{ flexDirection: "column" }}>
        <div className={Img}>
          <img alt={name} src={img} />
        </div>
        <h4 className={Title}>{transformName}</h4>
        <ul className={Options}>
          <li className={Count} onClick={(e) => e.preventDefault()}>
            Add to cart:&nbsp;
            <CartCounter id={item.model.id}/>
          </li>
          <li className={Price}>
            <span>Price</span>: ${price}
          </li>
        </ul>
      </Link>
    </li>
  );
}
