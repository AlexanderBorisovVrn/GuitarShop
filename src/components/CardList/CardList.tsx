import style from "./CardList.module.scss";
import CardItem from "../CardItem/CardItem";
import {observer}from "mobx-react-lite";
import store from "../../store/RootStore";
const { Cards_List, Sort, Wrap } = style;
type Props = {};

const CardList = observer(({}: Props) => {
  store.fetchStore.fetchData();
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
      <ul className={Cards_List}>
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
      </ul>
    </section>
  );
});

export default CardList;
