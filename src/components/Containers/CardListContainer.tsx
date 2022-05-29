import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import {IProduct} from '../../types/types'
import CardList from "../CardList/CardList";
import store from "../../store/RootStore";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import {useParams} from 'react-router-dom';

type Props = {};

const CardListContainer = observer(({}: Props) => {
  const params  = useParams();

  useEffect(() => {
    store.fetchStore.fetchData();
  }, []);

  if (store.fetchStore.isLoading) {
    return <Loader />;
  }
  if (store.fetchStore.error) {
    return <Error />;
  }
  return <CardList data={store.fetchStore.data} category={params.category}/>;
});

export default CardListContainer;
