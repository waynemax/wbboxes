import React, { FC, useEffect, useState } from "react";
import { Route } from "shared/definitions";
import { useRoute } from "react-router5";
import { TablerIcon } from "@tabler/icons";
import router from "../../../../../router";
import { useStyles } from "./styles";

interface IProps {
  links: { link: Route; label: string; icon: TablerIcon }[];
}

export const NavLinks: FC<IProps> = ({ links }) => {
  const { route } = useRoute();
  const { classes, cx } = useStyles();
  const [active, setActive] = useState("Billing");

  useEffect(() => {
    setActive(route.name);
  }, [route]);

  return (
    <>
      {links.map((item) => (
        <a
          className={cx(classes.link, { [classes.linkActive]: item.link === active })}
          href={item.link}
          key={item.label}
          onClick={(event) => {
            event.preventDefault();
            router.navigate(item.link);
            setActive(item.link);
          }}>
          <item.icon className={classes.linkIcon} />
          <span>{item.label}</span>
        </a>
      ))}
    </>
  );
};
