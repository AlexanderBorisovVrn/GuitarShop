import React from "react";
import style from "./ProductItem.module.scss";
import { IProduct } from "../../types/types";
import ImgGallery from "../ImgGallery/ImgGallery";
const { Layout, About, Features, Description, Color, Title, SubTitle } = style;

type Props = { item: IProduct | undefined };

export default function ProductItem({ item }: Props) {
  if (!item) {
    return null;
  }
  const { name, serial, photo, description, features } = item.model;

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
        <section className={About}>
          <div style={{ margin: "1rem 0" }}>
            <ImgGallery links={photo} />
          </div>
          <ul className={Description}>{displayContent(description)}</ul>
          <h2 className={SubTitle}>Features</h2>
          <hr />
          <ul className={Features}>{displayContent(features)}</ul>
        </section>
        <aside className={Color}></aside>
      </div>
    </>
  );
}
