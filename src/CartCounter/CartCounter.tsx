import { observer } from 'mobx-react-lite';
import React, { ReactNode} from 'react';
import Counter from '../components/Counter/Counter';
import store from '../store/RootStore';
type Props ={
  id:string | number
}

 function CartCounter({id}:Props) {
  const item = store.cartStore.cart.find((item: any) => item.id === id);
  const counter = item ? item.count : 0;
  const increment = () => {
    store.cartStore.updateCart(id, 1);
  };
  const decrement = () => {
    store.cartStore.updateCart(id, -1);
  };

  return <Counter increment={increment} decrement={decrement} counter={counter}/>
}

export default observer(CartCounter)