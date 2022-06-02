import style from "./CartPage.module.scss";
const { Title} = style;
type Props = {};

export default function CartPage({}: Props) {
  return (
    <section style={{ backgroundColor: "#F5F5F5", minHeight: "100vh" }}>
      <h1 className={Title}>Cart</h1>
    </section>
  );
}
