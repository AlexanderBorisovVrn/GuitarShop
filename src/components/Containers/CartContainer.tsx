import GridContainer from "../GridContainer/GridContainer";
import OrderList from "../OrederList/OrderList";
import Order from "../Order/Order";
import store from "../../store/RootStore";
import { observer } from "mobx-react-lite";
type Props = {};

function CartContainer({}: Props) {
  const orderList = store.cartStore.cart;
  if (orderList.length === 0) {
    return <p style={{ fontSize: "30px",width:'100%',display:'flex',justifyContent:'center'}}>Корзина пуста</p>;
  }
  const total = store.cartStore.orderTotal;
  return (
    <GridContainer
      left={<OrderList orderList={orderList} />}
      right={<Order total={store.cartStore.orderTotal} checkOut={()=>console.log('checkout')}/>}
    />
  );
}

export default observer(CartContainer);
