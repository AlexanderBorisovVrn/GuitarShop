import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useJoinClassNames } from "../../hooks/useJoinClassNames";
import logo from "../../img/logo/logo.svg";
import NavTabs from "../NavTabs/NavTabs";
import AuthPanel from "../AuthPanel/AuthPanel";
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

type Props = {};

export default function Header({}: Props) {
  const containerStyles = useJoinClassNames(
    "Container",
    Header_Container_SpaceBetween
  );
  const searchButtonStyles = useJoinClassNames(
    Button,
    Button_Border,
    "_Underline",
    "_Hover"
  );
  const cartButtonStyles = useJoinClassNames(Button,"_Hover");
  const burgerButtonStyle = useJoinClassNames(Button, Burger);

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
          <button type="button" className={cartButtonStyles}>
              <AuthPanel/>
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
