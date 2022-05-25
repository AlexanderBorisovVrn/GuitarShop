import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import logo from "../../img/logo/logo.svg";
import NavTabs from "../NavTabs/NavTabs";
const {_Header,HeaderLink,Button,Header_Container_SpaceBetween} = styles;

type Props = {};

export default function Header({}: Props) {
  const containerStyles = ['Container',Header_Container_SpaceBetween].join(' ');
  const searchButtonStyles = [Button,'_Hover_Underline'].join(' ')

  return (
    <header className={_Header}>
      <div className={containerStyles}>
        <div className={styles.Logo}>
          <Link to="/" className={HeaderLink}>
            <img src={logo} />
          </Link>
        </div>
        <NavTabs />
        <button type="button" className={searchButtonStyles}>
            &#128269;
        </button>
      </div>
    </header>
  );
}

