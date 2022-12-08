import { CSSProperties } from "react";

export type PaddingPropsComponent = {
  horizontal?: 0 | 1 | 2 | 3 | 4;
  vertical?: 0 | 1 | 2 | 3 | 4;
  children: any;

  className?: string
  style?: CSSProperties
};
