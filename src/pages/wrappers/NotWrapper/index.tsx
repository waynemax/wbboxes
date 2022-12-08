import React from "react";

interface IProps {
  children: React.ReactNode;
}

export default function NotWrapper(props: IProps) {
  return <div>{props.children}</div>;
}
