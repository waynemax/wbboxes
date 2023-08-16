import { ReactElement } from "react";
import styles from "./MainWrapper.module.scss";

type TProps = {
  children: ReactElement;
};

const MainWrapperHOC = (props: TProps) => (
  <div className={styles.root}>
    <div className={styles.content}>{props.children}</div>
  </div>
);

export const MainWrapper = MainWrapperHOC;
