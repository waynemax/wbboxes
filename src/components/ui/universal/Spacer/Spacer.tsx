import React from "react";
import classNames from "classnames";
import { IPropsComponent } from "./assets/interfaces";

import styles from "./styles.module.scss";

export const Spacer: React.FC<IPropsComponent> = (props) => {
  const { size, forKey, background = undefined, direction = "vertical" } = props;
  const stylized = !background ? {} : { style: { background } };
  return (
    <div key={forKey} className={classNames(styles.spacer, styles[`spacer-${direction}-${size}`])} {...stylized} />
  );
};
