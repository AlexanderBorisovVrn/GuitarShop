import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { IProduct } from "../../types/types";
import store from "../../store/RootStore";
import ProductItem from "./../ProductItem/ProductItem";
import { observer } from "mobx-react-lite";

type Props = {};

 function ProductItemContainer({}: Props) {
  const { id } = useParams();
  useEffect(()=>{
    store.fetchStore.fetchData();
  },[])

  const item:IProduct|undefined = store.fetchStore.data.find((el: IProduct) => el.model.id === id);
  return <ProductItem item={item} />
}

export default observer(ProductItemContainer)
