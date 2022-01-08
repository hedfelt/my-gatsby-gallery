import React from "react";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import * as styles from "./Menu.module.scss";

export default function Menu() {
  const dropdownList = ["Medium", "Colors", "Size"];
  const optionsList = ["Watercolor", "Acrylic", "Oil", "Ink"];
  return (
    <div className={styles.menu}>
      <div>SORT BY:</div>
      {dropdownList.map((item) => (
        <DropDownMenu key={item} title={item} options={optionsList} />
      ))}
    </div>
  );
}
