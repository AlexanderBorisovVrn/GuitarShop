import MyButton from '../UI/MyButton';
import style from './Order.module.scss';
const {  Wrap, Total, } = style;

type Props = {
  total:number;
  checkOut:()=>void
}

export default function Order({total,checkOut}: Props) {
  return (
    <div className={Wrap}>
            <h2>Order</h2>
            <hr />
            <ul className={Total}>
              <li>
                <span>Sub-total:</span>
                <span>${total}</span>
              </li>
              <li>
                <span>Delivery costs:</span>
                <span>FREE</span>
              </li>
              <li>
                <span>Total:</span>
                <span>${total}</span>
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