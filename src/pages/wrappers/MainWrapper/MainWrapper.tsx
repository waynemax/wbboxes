import { ReactElement } from "react";
import styles from "./MainWrapper.module.scss";
import { NavBar } from "./Components/NavBar";

type TProps = {
  children: ReactElement;
};

const MainWrapperHOC = (props: TProps) => (
  <div className={styles.root}>
    <NavBar />
    <div className={styles.content}>{props.children}</div>
  </div>
);

export const MainWrapper = MainWrapperHOC;
