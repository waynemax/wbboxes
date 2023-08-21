import { useState } from "react";
import { createStyles, Header, Group, ActionIcon, Container, Burger, rem, MantineTheme } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from "@tabler/icons-react";
import { ReactComponent as LogoIcon } from "shared/static/icons/logo.svg";
import { LanguagePicker } from "../LanguagePicker";

const useStyles = createStyles((theme: MantineTheme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: rem(56),

    [theme.fn.smallerThan("sm")]: {
      justifyContent: "flex-start",
    },
  },

  links: {
    width: rem(550),

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  social: {
    width: rem(250),

    [theme.fn.smallerThan("sm")]: {
      width: "auto",
      marginLeft: "auto",
    },
  },

  burger: {
    marginRight: theme.spacing.md,

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    "display": "block",
    "lineHeight": 1,
    "padding": `${rem(8)} ${rem(12)}`,
    "borderRadius": theme.radius.md,
    "textDecoration": "none",
    "color": theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7],
    "fontSize": theme.fontSizes.sm,
    "fontWeight": 500,

    "&:hover": {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({ variant: "light", color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor }).color,
    },
  },

  logoText: {
    fontSize: "20px",
    lineHeight: "26px",
    fontWeight: 800,
    color: theme.colors.gray[9],
  },
}));

interface HeaderMiddleProps {
  links: { link: string; label: string }[];
}

export function HeaderMiddle({ links }: HeaderMiddleProps) {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}>
      {link.label}
    </a>
  ));

  return (
    <Header height={56}>
      <Container className={classes.inner} size="lg">
        <Burger opened={opened} onClick={toggle} size="sm" className={classes.burger} />

        <div className="display_flex no_select">
          <LogoIcon height={28} />
          <div className={classes.logoText}>- PRODUCTS</div>
        </div>

        <Group className={classes.links} spacing={3}>
          {items}
        </Group>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon size="lg">
            <IconBrandTwitter size="1.1rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandYoutube size="1.1rem" stroke={1.5} />
          </ActionIcon>
          <LanguagePicker />
        </Group>
      </Container>
    </Header>
  );
}
