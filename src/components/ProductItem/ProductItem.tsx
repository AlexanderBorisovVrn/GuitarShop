import React from "react";
import style from "./ProductItem.module.scss";
import { IProduct } from "../../types/types";
import ImgGallery from "../ImgGallery/ImgGallery";
const {
  Layout,
  Features,
  Description,
  Field,
  Title,
  SubTitle,
  Aside,
  Btn_Icon,
} = style;

type Props = { item: IProduct | undefined };

export default function ProductItem({ item }: Props) {
  if (!item) {
    return null;
  }
  const { name, serial, photo, description, features, color, price } =
    item.model;

  const displayContent = (content: string[]) => {
    return content.map((p, idx) => {
      return <li key={idx}>{p}</li>;
    });
  };

  return (
    <>
      <h1 className={Title}>{name}</h1>
      <h5>Model#:{serial}</h5>
      <div className={Layout}>
        <section>
          <div style={{ margin: "1rem 0" }}>
            <ImgGallery links={photo} />
          </div>
          <ul className={Description}>{displayContent(description)}</ul>
          <h2 className={SubTitle}>Features</h2>
          <hr />
          <ul className={Features}>{displayContent(features)}</ul>
        </section>
        <aside className={Aside}>
          <div className={Field}>
            Price:
            <span>${price}</span>
          </div>
          <div className={Field}>
            Color:
            <span> {color}</span>
          </div>
          <button type="button">
            <span className={Btn_Icon}>&#10010;</span> Add to Cart
          </button>
        </aside>
      </div>
    </>
  );
}
