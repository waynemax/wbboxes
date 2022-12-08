import { Navbar, Group, Button } from "@mantine/core";
import { Route } from "shared/definitions";
import { IconWallet, IconHistory, IconArrowLeftCircle } from "@tabler/icons";
import router from "../../../../../router";
import { ReactComponent as Logo } from "../../../../../shared/static/icons/logo.svg";
import { useStyles } from "./styles";
import { NavLinks } from "./NavLinks";
import { SelectRole } from "../../../../../components/common/SelectRole";
import { Spacer } from "../../../../../components/ui/universal/Spacer/Spacer";

const data = [
  { link: Route.CLIENTS_SCREEN, label: "Клиенты", icon: IconWallet },
  { link: Route.TRANSACTIONS_SCREEN, label: "Транзакции", icon: IconHistory },
];

export const NavBar = () => {
  const { classes } = useStyles();

  return (
    <Navbar width={{ sm: 300 }} p="md" className={classes.navbar}>
      <Navbar.Section grow>
        <a
          href={`/${Route.CLIENTS_SCREEN}`}
          onClick={(e) => {
            e.preventDefault();
            router.navigate(Route.CLIENTS_SCREEN);
          }}>
          <Group className={classes.header} position="apart">
            <div className="logo">
              <Logo />
            </div>
            <div className="name">
              <span>лимпанель</span>
            </div>
          </Group>
        </a>
        <NavLinks links={data} />
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <SelectRole />
        <Spacer size={6} />
        <div>
          <Button variant="outline" radius={12} size="md" leftIcon={<IconArrowLeftCircle />}>
            Выход
          </Button>
        </div>
      </Navbar.Section>
    </Navbar>
  );
};
