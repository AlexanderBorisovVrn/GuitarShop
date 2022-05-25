import React from "react";
import style from "./SideBar.module.scss";
import { useLocation } from "react-router-dom";
const {Aside,Field_Set}=style;
type Props = {};

export default function Sidebar({}: Props) {
  const location = useLocation();
  return (
    <aside className={Aside}>
      <h1>Guitars</h1>
      <fieldset >
        <legend>Choose your favorite monster</legend>
        <input type="radio" id="kraken" name="monster" />
        <label htmlFor="kraken">Kraken</label><br/>
        <input type="radio" id="kraken" name="monster" />
        <label htmlFor="kraken">Kraken</label>
        <br />
      </fieldset>
    </aside>
  );
}
