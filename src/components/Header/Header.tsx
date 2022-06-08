import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { ILink } from "../../types/types";
import logo from "../../img/logo/logo.svg";
import NavTab from "../NavTab/NavTab";
import AuthPanel from "../AuthPanel/AuthPanel";
import store from "../../store/RootStore";

import { observer } from "mobx-react-lite";
import Nav from "../Nav/Nav";

const {
  _Header,
  HeaderLink,
  Button,
  Header_Container_SpaceBetween,
  Logo,
  Group,
  Button_Border,
  Burger,
  Cart_Counter,
} = styles;

const finalStyles = {
  containerStyles: ["Container", Header_Container_SpaceBetween].join(" "),
  searchButtonStyles: [Button, Button_Border, "_Underline", "_Hover"].join(" "),
  cartButtonStyles: [Button, "_Hover"].join(" "),
  burgerButtonStyle: [Button, Burger].join(" "),
};

const navLinks: ILink[] = [
  { label: "electric", to: "electric-guitars/" },
  { label: "acoustasonic", to: "acoustasonic-guitars/" },
  { label: "acoustic", to: "acoustic-guitars/" },
  { label: "basses", to: "electric-basses/" },
];

const desktopNav = navLinks.map((link) => (
  <NavTab hover underline height styles={{marginRight:'1rem'}}>{link}</NavTab>
));

function Header() {
  const {
    containerStyles,
    searchButtonStyles,
    cartButtonStyles,
    burgerButtonStyle,
  } = finalStyles;

  const { signout, user } = store.authStore;

  const itemsInCart = store.cartStore.itemsInCart() || 0;
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
        <Nav>
          {desktopNav}
        </Nav>
        <ul className={Group}>
          <li>
            <button type="button" className={cartButtonStyles}>
              <AuthPanel prop={{ user, signout }} />
            </button>
          </li>
          <li>
            <button type="button" className={cartButtonStyles}>
              <Link
                to="/cart"
                style={{ color: "inherit", width: "100%", display: "flex" }}
              >
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              </Link>
              <span className={Cart_Counter}>{itemsInCart}</span>
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
