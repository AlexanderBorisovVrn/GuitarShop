import React from "react";
import GridContainer from "../GridContainer/GridContainer";
import CartItem from '../CardItem/CardItem';
import OrderList from '../OrederList/OrderList';
import Order from '../Order/Order';
import store from '../../store/RootStore';
import { observer } from "mobx-react-lite";
type Props = {};

 function CartContainer({}: Props) {


  return <GridContainer
    left={<OrderList/>}
    right={<Order/>}/>;
}

export default observer(CartContainer)
