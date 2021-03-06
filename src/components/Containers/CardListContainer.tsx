import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import CardList from "../CardList/CardList";
import store from "../../store/RootStore";
import MyLoader from "../MyLoader/MyLoader";
import Error from "../Error/Error";
import { useParams } from "react-router-dom";

type Props = {};

const CardListContainer = observer(({}: Props) => {
  const params = useParams();

  useEffect(() => {
    store.fetchStore.fetchData();
  }, []);

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
        <MyLoader color='primary' size="lg" />
      </div>
    );
  }
  if (store.fetchStore.error) {
    return <Error />;
  }
  return <CardList data={store.fetchStore.data} category={params.category} />;
});

export default CardListContainer;
