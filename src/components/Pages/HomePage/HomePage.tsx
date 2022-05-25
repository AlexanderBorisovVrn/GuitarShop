import style from "./HomePage.module.scss";
import Sidebar from "../../SideBar/Sidebar";
import CardList from "../../CardList/CardList";

const { Home_Page } = style;

export default function HomePage() {
  
  return (
    <main>
      <div className='Container' id={Home_Page}>
        <Sidebar />
        <CardList />
      </div>
    </main>
  );
}
