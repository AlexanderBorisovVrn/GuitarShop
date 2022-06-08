import style from "./ProductItem.module.scss";
import { IProduct } from "../../types/types";
import ImgGallery from "../ImgGallery/ImgGallery";
const {
  Layout,
  Gallery,
  Features,
  Features_List,
  Description,
  Field,
  Title,
  SubTitle,
  Aside,
  Btn_Icon,
} = style;

type Props = {
  children: IProduct | undefined;
  addToCart: (id: number | string, q: number) => void;
};

export default function ProductItem({ children, addToCart }: Props) {
  if (!children) {
    return null;
  }
  const { name, serial, photo, description, features, color, price } =
    children.model;

  const onClickHandler = () => addToCart(children.model.id, 1);

  const displayContent = (content: string[]) => {
    return content.map((p, idx) => {
      return <li key={idx}>{p}</li>;
    });
  };

  return (
    <div className="Container" id={Layout}>
      <h1 className={Title}>{name}</h1>
      <h4>Model#:{serial}</h4>
      <section className={Gallery}>
        <div style={{ margin: "1rem 0" }}>
          <ImgGallery links={photo} />
        </div>
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
          <button
            type="button"
            onClick={onClickHandler}
            style={{ boxShadow: "2px 2px 6px black" }}
          >
            <span className={Btn_Icon}>&#10010;</span> Add to Cart
          </button>
        </aside>
        <section className={Description}>
          <ul>{displayContent(description)}</ul>
        </section>
        <section className={Features}>
          <h2 className={SubTitle}>Features</h2>
          <hr />
          <ul className={Features_List}>{displayContent(features)}</ul>
        </section>
    </div>
  );
}
