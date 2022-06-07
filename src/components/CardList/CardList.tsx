import style from "./CardList.module.scss";
import { IProduct } from "../../types/types";
import CardItem from "../CardItem/CardItem";

const { Cards_List, Sort, Wrap } = style;
type Props = { data: IProduct[]};

const CardList = ({ data}: Props) => {

  const dataView = data.map((item, idx) => {
    return <CardItem item={item} key={idx} />;
  });

  return (
    <section className={Wrap}>
      <div className={Sort}>
        <h3>Sort by:</h3>
        <select
          name="sort"
          id="sort"
          onChange={(e) => console.log(e.target.value)}
        >
          <option value="default" disabled selected>-</option>
          <option value="priceUp">Сначала дешевые</option>
          <option value="priceDown">Сначала дорогие</option>
        </select>
      </div>
      <ul className={Cards_List}>{dataView}</ul>
    </section>
  );
};

export default CardList;
