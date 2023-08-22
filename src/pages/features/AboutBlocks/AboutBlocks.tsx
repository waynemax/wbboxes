import { Grid, Container, createStyles, rem, Text, Space } from "@mantine/core";

import CardImage from "shared/static/icons/card.png";
import ResumeImage from "shared/static/icons/resume.png";
import SimImage from "shared/static/icons/sim.png";
import GlassImage from "shared/static/icons/glass.png";
import DiagramImage from "shared/static/icons/diagram.png";
import classNames from "classnames";

const useStyles = createStyles((theme) => ({
  minItemsWrapper: {
    flex: 1,
    margin: 0,
    height: rem(570),
    display: "flex",
    flexDirection: "column",
  },
  minItem: {
    flex: 1,
    margin: 0,
    height: rem(277),
    borderRadius: theme.radius.lg,
    backgroundColor: "white",
    boxShadow: "0 0 70px 0 rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.04)",
    cursor: "default",
  },

  item: {
    "flex": 1,
    "margin": 0,
    "height": rem(570),
    "borderRadius": theme.radius.lg,
    "backgroundColor": "white",
    "boxShadow": "0 0 70px 0 rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.04)",
    "cursor": "default",
    "&.dark": {
      backgroundColor: "rgb(106,92,108)",
      background: "linear-gradient(45deg, rgb(220 255 240) 0%, #00ceff 100%)",
      boxShadow:
        "0 0 70px 0 rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.04), inset 0 0 0 2px rgb(178 231 255), inset 0 0 0 3px #c0fffd, inset 0 0 100px 6px #c0ecff",
    },
  },

  description: {
    "padding": "24px 50px",
    "margin": "auto",
    "fontSize": "24px",
    "fontWeight": 500,
    "color": theme.colors.gray[6],
    "textAlign": "center",
    "&.blue": {
      color: "#397b8c",
      fontSize: "30px",
      paddingTop: "0px",
      textShadow: "0 13px 30px rgba(255,255,255,0.8)",
    },
    "&.min": {
      fontSize: "20px",
      padding: "36px 24px 24px",
    },
  },

  image: {
    "width": "80%",
    "padding": "70px 0 30px",
    "margin": "0 10%",
    "display": "flex",
    "&.min": {
      width: "auto",
      height: "150px",
      margin: "0 auto",
      padding: "20px 0 0px",
      display: "flex",
      img: {
        height: "150px",
        margin: "auto",
      },
    },
    "img": {
      maxHeight: "280px",
      margin: "auto",
    },
  },
}));

export function AboutBlocks() {
  const { classes } = useStyles();
  return (
    <Container size="lg" my={80}>
      <Text
        variant="gradient"
        gradient={{ from: "indigo", to: "cyan", deg: 45 }}
        sx={{ fontFamily: "Greycliff CF, sans-serif" }}
        ta="center"
        fz={50}
        fw={700}>
        Став владельцем
        <br />
        X-PHONE вы получаете
      </Text>
      <Space h={70} />
      <Grid columns={24} className="no_select">
        <Grid.Col xs={11}>
          <div className={classes.minItemsWrapper}>
            <div className={classes.minItem}>
              <div className={classNames([classes.image, "min"])}>
                <img src={SimImage} alt="" />
              </div>
              <div className="w-100 display_flex">
                <span className={classNames([classes.description, "min"])}>
                  SIM-карту с навсегда
                  <br />
                  безлимитным интернетом
                </span>
              </div>
            </div>
            <Space h={16} />
            <div className={classes.minItem}>
              <div className={classNames([classes.image, "min"])}>
                <img src={GlassImage} alt="" />
              </div>
              <div className="w-100 display_flex">
                <span className={classNames([classes.description, "min"])}>
                  Инструмент пассивного
                  <br />
                  дохода от использования телефона
                </span>
              </div>
            </div>
          </div>
        </Grid.Col>
        <Grid.Col xs={13}>
          <div className={classes.item}>
            <div className={classes.image}>
              <img src={CardImage} alt="" />
            </div>
            <div className="w-100 display_flex">
              <span className={classes.description}>
                Банковскую карту{" "}
                <Text
                  sx={{ display: "inline" }}
                  variant="gradient"
                  gradient={{ from: "grape", to: "pink", deg: 45 }}
                  fz="xl"
                  fw={700}>
                  X-WORLD
                </Text>{" "}
                <br />с возможностью оплаты покупок в криптовалюте по всему миру
              </span>
            </div>
          </div>
        </Grid.Col>
        <Grid.Col xs={13}>
          <div
            className={classNames(classes.item, {
              dark: true,
            })}>
            <div className={classes.image}>
              <img src={ResumeImage} alt="" />
            </div>
            <div className="w-100 display_flex">
              <span
                className={classNames(classes.description, {
                  blue: true,
                })}>
                Возможность быть
                <br />
                совладельцем компании
              </span>
            </div>
          </div>
        </Grid.Col>
        <Grid.Col xs={11}>
          <div className={classNames(classes.item, {})}>
            <div className={classes.image}>
              <img src={DiagramImage} alt="" />
            </div>
            <div className="w-100 display_flex">
              <span className={classNames(classes.description, {})}>
                Доход от активности
                <br />
                всего сообщества пользователей
              </span>
            </div>
          </div>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
