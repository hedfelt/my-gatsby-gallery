import React from "react";
import { LayoutGroup } from "framer-motion";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import * as styles from "./Menu.module.scss";

export default function Menu() {
  const dropdownList = ["Medium", "Colors", "Size"];
  const optionsList = ["Watercolor", "Acrylic", "Oil", "Ink"];
  return (
    <div className={styles.menu}>
      <div className={styles.menu__options}>
        <LayoutGroup>
          {dropdownList.map((item) => (
            <DropDownMenu key={item} title={item} options={optionsList} />
          ))}
        </LayoutGroup>
      </div>

      <div className={styles.menu__line} />
    </div>
  );
}
