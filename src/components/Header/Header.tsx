import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import logo from "../../img/logo/logo.svg";
import NavTabs from "../NavTabs/NavTabs";
import AuthPanel from "../AuthPanel/AuthPanel";
import store from "../../store/RootStore";
import { observer } from "mobx-react-lite";

const {
  _Header,
  HeaderLink,
  Button,
  Header_Container_SpaceBetween,
  Logo,
  Group,
  Button_Border,
  Burger,
} = styles;

const finalStyles = {
  containerStyles: ["Container", Header_Container_SpaceBetween].join(" "),

  searchButtonStyles: [Button, Button_Border, "_Underline", "_Hover"].join(" "),
  cartButtonStyles: [Button, "_Hover"].join(" "),
  burgerButtonStyle: [Button, Burger].join(" "),
};

function Header() {
  const {
    containerStyles,
    searchButtonStyles,
    cartButtonStyles,
    burgerButtonStyle,
  } = finalStyles;

  const { onAuthVisible, signout, isAuth, user } = store.authStore;
  const openAuthFormHandler = isAuth ? () => {} : onAuthVisible;

  return (
    <header className={_Header}>
      <div className={containerStyles}>
        <div className={Group}>
          <button className={burgerButtonStyle}></button>
          <div className={Logo}>
            <Link to="/" className={HeaderLink}>
              <img src={logo} />
            </Link>
          </div>
        </div>

        <NavTabs />
        <ul className={Group}>
          <li>
            <button
              type="button"
              onClick={openAuthFormHandler}
              className={cartButtonStyles}
            >
              <AuthPanel prop={{ user, signout }} />
            </button>
          </li>
          <li>
            <button type="button" className={cartButtonStyles}>
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            </button>
          </li>

          <li>
            <button type="button" className={searchButtonStyles}>
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default observer(Header);
