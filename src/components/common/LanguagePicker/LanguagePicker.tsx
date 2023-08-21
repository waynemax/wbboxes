import { useState } from "react";
import { createStyles, UnstyledButton, Menu, Image, Group, rem } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import english from "./images/english.png";
import german from "./images/german.png";
import italian from "./images/italian.png";
import french from "./images/french.png";
import polish from "./images/polish.png";

const data = [
  { label: "English", image: english },
  { label: "German", image: german },
  { label: "Italian", image: italian },
  { label: "French", image: french },
  { label: "Polish", image: polish },
];

const useStyles = createStyles((theme, { opened }: { opened: boolean }) => ({
  control: {
    "width": rem(200),
    "display": "flex",
    "justifyContent": "space-between",
    "alignItems": "center",
    "padding": `${theme.spacing.xs} ${theme.spacing.md}`,
    "borderRadius": theme.radius.md,
    "transition": "background-color 150ms ease",

    "&:hover": {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[0],
    },
  },

  label: {
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,
  },

  icon: {
    transition: "transform 150ms ease",
    transform: opened ? "rotate(180deg)" : "rotate(0deg)",
  },
}));

export function LanguagePicker() {
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles({ opened });
  const [selected, setSelected] = useState(data[0]);
  const items = data.map((item) => (
    <Menu.Item
      icon={<Image src={item.image} width={18} height={18} />}
      onClick={() => setSelected(item)}
      key={item.label}>
      {item.label}
    </Menu.Item>
  ));

  return (
    <Menu onOpen={() => setOpened(true)} onClose={() => setOpened(false)} radius="md" width="target" withinPortal>
      <Menu.Target>
        <UnstyledButton className={classes.control}>
          <Group spacing="xs">
            <Image src={selected.image} width={22} height={22} />
            <span className={classes.label}>{selected.label}</span>
          </Group>
          <IconChevronDown size="1rem" className={classes.icon} stroke={1.5} />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>{items}</Menu.Dropdown>
    </Menu>
  );
}
