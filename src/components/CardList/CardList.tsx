import React, { FC } from "react";
import style from "./CardList.module.scss";
import { IProduct } from "../../types/types";
import CardItem from "../CardItem/CardItem";

const { Cards_List, Sort, Wrap } = style;
type Props = { data: IProduct[]; category?: string };

const CardList = ({ data, category }: Props) => {
  const categoryData = category
    ? data.filter((item) => item.category === category)
    : data;
  if (categoryData.length === 0) {
    return (
      <div
        style={{
          display: "flex",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "24px",
        }}
      >
        Ничего не найдено :-((
      </div>
    );
  }

  const dataView = categoryData.map((item, idx) => {
    return <CardItem item={item} key={idx} />;
  });

  return (
    <section className={Wrap}>
      <div className={Sort}>
        <h3>Sort by:</h3>
        <select name="sort" id="sort">
          <option value="priceUp">Сначала дешевые</option>
          <option value="priceDown">Снчала дорогие</option>
          <option value="popular">Популярные</option>
        </select>
      </div>
      <ul className={Cards_List}>{dataView}</ul>
    </section>
  );
};

export default CardList;
