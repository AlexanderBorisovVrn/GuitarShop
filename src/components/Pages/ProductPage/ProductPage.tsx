import style from "./ProductPage.module.scss";
import Sidebar from "../../SideBar/Sidebar";
import CardListContainer from "../../Containers/CardListContainer";
import { Outlet } from "react-router-dom";
const { Product_Page } = style;

export default function ProductPage() {
  
  return (
    <main>
      <div className='Container' id={Product_Page }>
        <Sidebar />
        <CardListContainer />
      </div>
    </main>
  );
}
