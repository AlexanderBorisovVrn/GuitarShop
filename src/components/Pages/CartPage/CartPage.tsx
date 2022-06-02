import style from "./CartPage.module.scss";
import CartContainer from '../../Containers/CartContainer'
const { Title} = style;
type Props = {};

export default function CartPage({}: Props) {
  return (
    <section style={{ backgroundColor: "#F5F5F5", minHeight: "100vh" }}>
      <h1 className={Title}>Cart</h1>
      <CartContainer/>
    </section>
  );
}
