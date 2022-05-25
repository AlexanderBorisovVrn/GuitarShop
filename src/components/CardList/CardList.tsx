import React from "react";
import style from "./CardList.module.scss";
import List from "../UI/List";
import CardItem from "../CardItem/CardItem";
import CSS from 'csstype'
const { CardsList, Sort, Wrap } = style;
type Props = {};

export default function CardList({}: Props) {
  const styles:CSS.Properties = {display:'grid',gridTemplateColumns:'1fr 1fr 1fr'}
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
      <List sx={styles}>
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </List>
    </section>
  );
}