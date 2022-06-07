import useData from "../../hooks/useData";
import style from "./SideBar.module.scss";
const {Aside,Field_Set}=style;
type Props = {};

export default function Sidebar({}: Props) {
  const data = useData();
  
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
