import style from "./CardList.module.scss";
import CardItem from "../CardItem/CardItem";
import CSS from 'csstype'
const { Cards_List, Sort, Wrap } = style;
type Props = {};

export default function CardList({}: Props) {
  const styles:CSS.Properties = {display:'grid',gridTemplateColumns:'repeat(3,1fr)'}
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
}
