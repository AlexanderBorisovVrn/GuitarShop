import { useState } from "react";
import style from "./AuthPanel.module.scss";
type Props = {
  user?: string;
  signout: () => void;
};

export default function AuthPanel({ prop }: { prop: Props }) {
  const [isDropDownOpened, setIsDropDownOpened] = useState(false);

  const useIconClasses = ["fa-solid fa-user", style.Icon].join(" ");
  const dropDownClasses = isDropDownOpened
    ? style.Drop
    : ["visually-hidden", style.Drop].join(" ");
  function onDropHandler() {
    setIsDropDownOpened(!isDropDownOpened);
  }

  const showUserName = <span onClick={onDropHandler}>{prop.user}</span>;
  const showUserIcon = <i className={useIconClasses}></i>;
  const displayUser = prop.user ? showUserName : showUserIcon;

  return (
    <div className={style.Wrap}>
      {displayUser}
      <ul className={dropDownClasses}>
        <li onClick={()=>{
          prop.signout();
          onDropHandler()
        }}>
          <span>Выйти</span>
        </li>
      </ul>
    </div>
  );
}
