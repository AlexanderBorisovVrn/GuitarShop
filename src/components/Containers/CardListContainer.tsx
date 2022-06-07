import React, { useEffect } from "react";
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
  const { data } = store.fetchStore;
  useEffect(() => {
    store.fetchStore.fetchData();
  }, []);

  const filteredData = category
    ? data.filter((item: IProduct) => item.category === category)
    : data;

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

  if (filteredData.length === 0) {
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
  return <CardList data={filteredData} />;
});

export default CardListContainer;
