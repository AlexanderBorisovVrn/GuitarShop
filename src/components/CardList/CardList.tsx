import React from "react";
import style from "./CardList.module.scss";
import { IProduct } from "../../types/types";
import CardItem from "../CardItem/CardItem";

const { Cards_List, Sort, Wrap } = style;
type Props = {
  children: IProduct[];
  setFilter: React.Dispatch<React.SetStateAction<string>>;
};

const CardList = ({ children, setFilter }: Props) => {
  const dataView = children.map((item, idx) => {
    return <CardItem item={item} key={idx} />;
  });

  return (
    <section className={Wrap}>
      <div className={Sort}>
        <h3>Sort by:</h3>
        <select
          name="sort"
          id="sort"
          defaultValue={'-'}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="-" disabled>-</option>

          <option value="priceUp">Сначала дешевые</option>
          <option value="priceDown">Сначала дорогие</option>
        </select>
      </div>
      <ul className={Cards_List}>{dataView}</ul>
    </section>
  );
};

export default CardList;
