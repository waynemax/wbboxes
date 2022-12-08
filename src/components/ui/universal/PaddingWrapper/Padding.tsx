import React from "react";
import classNames from "classnames";
import { PaddingPropsComponent } from "./assets/interfaces";

import styles from "./styles.module.scss";

const PaddingComponent: React.FC<PaddingPropsComponent> = (props: PaddingPropsComponent) => {
  const { horizontal = undefined, vertical = undefined, children, className = "" } = props;
  return (
    <div
      className={classNames({
        [styles[`padding-horizontal-${horizontal}`]]: horizontal,
        [styles[`padding-vertical-${vertical}`]]: vertical,
        [className]: Boolean(props.className),
      })}
      style={props.style}
    >
      {children}
    </div>
  );
};

export const Padding = React.memo(PaddingComponent);
