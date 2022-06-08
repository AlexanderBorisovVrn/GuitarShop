import React, { useState } from "react";
import style from "./CardList.module.scss";
import Pagination from "@mui/material/Pagination";
import { IProduct } from "../../types/types";
import CardItem from "../CardItem/CardItem";

const { Cards_List, Sort, Wrap, _Pagination } = style;

type Props = {
  children: IProduct[];
  setFilter: React.Dispatch<React.SetStateAction<string>>;
};

const CardList = ({ children, setFilter }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);

  const filterHandler = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setFilter(e.target.value);
  const paginationHandler = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };
  const itemsInPage: number = 6;
  const pagesCount = Math.ceil(children.length / itemsInPage);
  const start = (currentPage - 1) * itemsInPage;
  const end = currentPage * itemsInPage;

  const dataView = children
    .map((item, idx) => {
      return <CardItem item={item} key={idx} />;
    })
    .slice(start, end);

  return (
    <section className={Wrap}>
      <div className={Sort}>
        <h3>Sort by:</h3>
        <select
          name="sort"
          id="sort"
          defaultValue={"-"}
          onChange={filterHandler}
        >
          <option value="-" disabled>
            -
          </option>

          <option value="priceUp">Сначала дешевые</option>
          <option value="priceDown">Сначала дорогие</option>
        </select>
      </div>
      <ul className={Cards_List}>{dataView}</ul>
      <div className={_Pagination}>
        <Pagination
          count={pagesCount}
          color="primary"
          page={currentPage}
          onChange={paginationHandler}
        />
      </div>
    </section>
  );
};

export default CardList;
