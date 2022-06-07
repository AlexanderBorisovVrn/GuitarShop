import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import CardList from "../CardList/CardList";
import store from "../../store/RootStore";
import MyLoader from "../MyLoader/MyLoader";
import Error from "../Error/Error";
import { useParams } from "react-router-dom";
import { IProduct } from "../../types/types";

type Props = {};

const CardListContainer = observer(({}: Props) => {
  const { category } = useParams();
  const [filter, setFilter] = useState<string>("default");
  const { data } = store.fetchStore;

  useEffect(() => {
    store.fetchStore.fetchData();
  }, []);

  const categoryData = category
    ? data.filter((item: IProduct) => item.category === category)
    : data;

  const filteredData = (data: IProduct[], filter: string) => {
    switch (filter) {
      case "priceUp":
        return data.slice().sort(
          (a: IProduct, b: IProduct) => a.model.price - b.model.price
        );
      case "priceDown":
        return data.slice().sort(
          (a: IProduct, b: IProduct) => b.model.price - a.model.price
        );
      default:
        return data;
    }
  };

  if (store.fetchStore.isLoading) {
    return (
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          display: "flex",
          height: "80vh",
        }}
      >
        <MyLoader color="primary" size="lg" />
      </div>
    );
  }
  if (store.fetchStore.error) {
    return <Error />;
  }

  if (filteredData(categoryData, filter).length === 0) {
    return (
      <div
        style={{
          display: "flex",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "24px",
        }}
      >
        Ничего не найдено :-((
      </div>
    );
  }
  return (
    <CardList setFilter={setFilter}>
      {filteredData(categoryData, filter)}
    </CardList>
  );
});

export default CardListContainer;
