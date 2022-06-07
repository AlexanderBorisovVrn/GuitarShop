import { useContext, useEffect, useState } from "react";
import { useLocation} from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext/AuthConstext";
import style from "./AuthPanel.module.scss";

type Props = {
  user?: string;
  signout: (callback?: () => void) => void;
};

export default function AuthPanel({ prop }: { prop: Props }) {
  const [isDropDownOpened, setIsDropDownOpened] = useState(false);
  const {signInRedirect}=useContext(AuthContext)
  const location = useLocation();

  useEffect(() => {
    setIsDropDownOpened(false);
  }, [location]);
  
  const useIconClasses = ["fa-solid fa-user", style.Icon].join(" ");
  const dropDownClasses = isDropDownOpened
    ? style.Drop
    : ["visually-hidden", style.Drop].join(" ");

  function onDropHandler() {
    setIsDropDownOpened(!isDropDownOpened);
  }

  const showUserName = <span>Hi, {prop.user}</span>;
  const showUserIcon = <i className={useIconClasses}></i>;
  const currentIcon = prop.user ? showUserName : showUserIcon;
  const currentHandler = prop.user
    ? onDropHandler
    : signInRedirect;

  return (
    <div className={style.Wrap} onClick={currentHandler}>
      {currentIcon}
      <ul className={dropDownClasses}>
        <li onClick={()=>prop.signout(onDropHandler)}>
          <span>Выйти</span>
        </li>
      </ul>
    </div>
  );
}
