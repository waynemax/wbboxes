import { createStyles, Container, Text, Button, Group, Badge, Title, Divider } from "@mantine/core";
import BackgroundSvg from "shared/static/icons/background.svg";
import { ReactComponent as TelegramSvg } from "shared/static/icons/adapted/telegram.svg";
import { ReactComponent as GitHubSvg } from "shared/static/icons/adapted/github.svg";
import DevicesPNG from "shared/static/icons/devices-1.png";
import { RunTicker } from "components/RunTicker";
import { CarouselProjects } from "shared/features";
import { Spacer } from "../../components/ui/universal/Spacer/Spacer";
import { Padding } from "../../components/ui/universal/PaddingWrapper";

const BreakPointMaximalMobile = "@media (max-width: 755px)";
const BreakPointMinimalWeb = "@media (max-width: 1100px)";

const useStyles = createStyles((theme) => ({
  wrapper: {
    width: "100%",
    position: "relative",
    minHeight: "100vh",
    boxSizing: "border-box",
    backgroundColor: "black",
    backgroundSize: "cover",
    display: "flex",
    overflow: "hidden",
  },

  inner: {
    position: "relative",
    width: "calc(100% - 160px)",
    margin: "auto 80px",

    [BreakPointMaximalMobile]: {
      paddingBottom: 80,
      paddingTop: 80,
    },
  },

  title: {
    "fontFamily": `${theme.fontFamily}`,
    "fontSize": 62,
    "fontWeight": 900,
    "lineHeight": 1.1,
    "margin": 0,
    "padding": 0,
    "color": theme.white,

    " span": {
      textShadow: "0 0 40px rgba(0,0,0,.5)",
    },

    [BreakPointMaximalMobile]: {
      fontSize: 42,
      lineHeight: 1.2,
    },
  },

  badge: {
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.xl,
  },

  description: {
    fontSize: 18,
    maxWidth: 600,
    fontWeight: 500,
    lineHeight: "30px",
    textShadow: "0 0 40px black",

    [BreakPointMaximalMobile]: {
      fontSize: 18,
    },
  },

  devices: {
    position: "absolute",
    right: 100,
    top: 0,
    height: "100vh",

    [BreakPointMinimalWeb]: {
      display: "none",
    },
  },

  controls: {
    marginTop: theme.spacing.xl * 1.3,

    [BreakPointMaximalMobile]: {
      marginTop: theme.spacing.xl,
    },
  },

  controlsIcon: {
    marginRight: "10px",
  },

  control: {
    height: 54,
    paddingLeft: 20,
    paddingRight: 23,

    [BreakPointMaximalMobile]: {
      height: 54,
      paddingLeft: 18,
      paddingRight: 18,
      flex: 1,
    },
  },
}));

export const WelcomeSection = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper} style={{ backgroundImage: `url(${BackgroundSvg})` }}>
      <div className={classes.devices}>
        <img src={DevicesPNG} width={650} alt="" />
      </div>
      <Container size={960} className={classes.inner}>
        <div className="w-100 display_flex">
          <div>
            <h1 className={classes.title}>
              <Text component="span" variant="gradient" gradient={{ from: "#3cfe4c", to: "#fff494" }} inherit>
                Web-Разработчик
              </Text>{" "}
              <span>Мачульский Максим Сергеевич</span>
            </h1>
            <div className={classes.badge}>
              <Group>
                <Badge color="yellow" size="md" variant="light">
                  Frontend
                </Badge>
                <Badge color="pink" size="md" variant="light">
                  Дизайн
                </Badge>
                <Badge color="blue" size="md" variant="light">
                  backend
                </Badge>
              </Group>
            </div>
            <Text className={classes.description} color="white">
              Комплексная разработка программного обеспечения, <br />
              запуск собственных продуктов, управление командой, поддержка работоспособности ПО, frontend менторинг.
            </Text>

            <Group className={classes.controls}>
              <Button
                radius={12}
                size="xl"
                compact
                className={classes.control}
                variant="gradient"
                gradient={{ from: "blue", to: "cyan" }}>
                <TelegramSvg height={36} className={classes.controlsIcon} />
                <span>@enyawxam</span>
              </Button>

              <Spacer size={2} direction="horizontal" />

              <Button
                component="a"
                href="https://github.com/mantinedev/mantine"
                size="xl"
                variant="white"
                color="black"
                radius={12}
                className={classes.control}>
                <GitHubSvg height={36} className={classes.controlsIcon} />
                <span>Пример кода</span>
              </Button>
            </Group>
          </div>
        </div>
      </Container>
      <RunTicker text="web3.js, html5, css3, scss, less, vanilla js, express, reactjs, react-native, expo, typescript, styled-components, figma, photoshop, illustrator, swr, react-query, ui libs (mantine, yandex, vk, mui, tamagui, etc, customs), react hooks, react classes, php7.4~, git, canvas, sql, mysql, nextjs, gatsby, firebase, s3 cloud, formik, svg, yup, bootstrap, mapbox with bigdata, leaflet, recharts, yandex map api, DOM, phpMyAdmin, jquery, axios, apache, nginx, bash, http, rest, tmux, es8, pm2, screen, xml, ajax, websockets, cookies, localstorage" />
    </div>
  );
};

export const Main = () => {
  return (
    <div>
      <WelcomeSection />
      <Padding vertical={3}>
        <Padding horizontal={3}>
          <Divider
            my="xs"
            variant="solid"
            size={2}
            color="gray"
            label={
              <Title order={1} color="white" ta="center">
                Крайние работы
              </Title>
            }
            labelPosition="center"
          />
        </Padding>
        <Spacer size={6} />
        <CarouselProjects />
      </Padding>
      <div style={{ minHeight: "100vh" }}>123</div>
    </div>
  );
};
