import MyButton from '../UI/MyButton';
import style from './Order.module.scss';
const {  Wrap, Total, } = style;

type Props = {}

export default function Order({}: Props) {
  return (
    <div className={Wrap}>
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
  )
}