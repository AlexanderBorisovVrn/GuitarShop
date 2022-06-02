import CartItem from "../../CartItem/CartItem";
import MyButton from "../../UI/MyButton";
import style from "./CartPage.module.scss";
const { Wrap, Title, Item_List, Order, Left, Right, Total, Top } = style;
type Props = {};

export default function CartPage({}: Props) {
  return (
    <section style={{ backgroundColor: "#F5F5F5", minHeight: "100vh" }}>
      <h1 className={Title}>Cart</h1>
      <div className="Container" id={Wrap}>
        <section className={Left}>
          <div className={Top}></div>
          <hr />
          <ul className={Item_List}>
            <CartItem />
            <CartItem />
            <CartItem />
          </ul>
        </section>

        <section className={Right}>
          <div className={Order}>
            <h2>Order</h2>
            <hr />
            <ul className={Total}>
              <li>
                <span>Sub-total:</span>
                <span>$15</span>
              </li>
              <li>
                <span>Delivery costs:</span>
                <span>FREE</span>
              </li>
              <li>
                <span>Total:</span>
                <span>$15</span>
              </li>
            </ul>
            <MyButton
              style={{ width: "80%", margin: "1.5rem auto" }}
              color="primary"
              type="button"
            >
              Checkout
            </MyButton>
          </div>
        </section>
      </div>
    </section>
  );
}
