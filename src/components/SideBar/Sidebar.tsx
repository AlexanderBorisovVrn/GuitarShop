import style from "./SideBar.module.scss";
import { useLocation } from "react-router-dom";
const {Aside,Field_Set}=style;
type Props = {};

export default function Sidebar({}: Props) {
  const location = useLocation();
  return (
    <aside className={Aside}>
      <h1>Filters</h1>
      <fieldset className={Field_Set}>
        <legend>Model</legend>
        <input type="checkbox" id="stratocaster" name="stratocaster" />
        <label htmlFor="stratocaster">Stratocaster</label><br/>
        <input type="checkbox" id="telecaster" name="telecaster" />
        <label htmlFor="telecaster">Telecaster</label>
        <br />
      </fieldset>
      <hr />

    </aside>
  );
}
