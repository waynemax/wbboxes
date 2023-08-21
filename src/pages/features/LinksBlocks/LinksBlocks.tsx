import { createStyles, Text } from "@mantine/core";
import classNames from "classnames";
import GlassImage from "shared/static/icons/glass.png";

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    alignItems: "stretch",
    flexWrap: "wrap",
  },
  contentWrapper: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    background: "linear-gradient(180deg, #eee 0%, #fff 100%)",
    display: "flex",
    flexDirection: "column",
  },
  item: {
    "width": "50%",
    "height": "50vh",
    "boxSizing": "border-box",
    "padding": "36px",
    "display": "flex",
    "alignItems": "stretch",
    "&:nth-child(1)": {
      borderRight: "1px solid rgba(0,0,0,0.15)",
      borderTop: "1px solid rgba(0,0,0,0.15)",
      width: "calc(50% - 1px)",
      borderBottom: "1px solid rgba(0,0,0,0.15)",
    },
    "&:nth-child(3)": {
      "borderRight": "1px solid rgba(0,0,0,0.15)",
      "borderBottom": "1px solid rgba(0,0,0,0.15)",
      "width": "calc(50% - 1px)",
      " .content": {
        background: "linear-gradient(180deg, #eea5ff40 0%, #fff 100%)",
      },
    },
    "&:nth-child(2)": {
      "borderBottom": "1px solid rgba(0,0,0,0.15)",
      "width": "calc(50% - 1px)",
      "borderTop": "1px solid rgba(0,0,0,0.15)",
      "borderRight": "1px solid rgba(0,0,0,0.15)",
      " .content": {
        background: "linear-gradient(180deg, #5aff71 0%, #fff 100%)",
      },
    },
    "&:nth-child(4)": {
      borderBottom: "1px solid rgba(0,0,0,0.15)",
      width: "calc(50% - 1px)",
      borderRight: "1px solid rgba(0,0,0,0.15)",
    },
  },
  contentWrapperText: {
    margin: "auto",
  },
  contentWrapperImage: {
    "width": "80%",
    "margin": "36px 10%",
    "display": "flex",
    " svg, img": {
      margin: "auto",
      height: "calc(50vh - 72px - 154px)",
    },
  },
}));

export const LinksBlocks = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.item}>
        <div className={classNames([classes.contentWrapper, "content"])}>
          <div className={classNames([classes.contentWrapperImage, "image"])}>
            <img src={GlassImage} alt="" />
          </div>
          <div className={classNames([classes.contentWrapperText, "text"])}>
            <Text
              variant="gradient"
              gradient={{ from: "#555", to: "#000", deg: 45 }}
              sx={{ fontFamily: "Greycliff CF, sans-serif" }}
              ta="center"
              fz={24}
              fw={700}>
              Товары компании
            </Text>
            <Text color="black" sx={{ fontFamily: "Greycliff CF, sans-serif" }} ta="center" fz={15} fw={500}>
              Первый в мире телефон, <br />
              который окупается и приносит прибыль
            </Text>
          </div>
        </div>
      </div>
      <div className={classes.item}>
        <div className={classNames([classes.contentWrapper, "content"])}>
          <div className={classNames([classes.contentWrapperImage, "image"])}>
            <img src={GlassImage} alt="" />
          </div>
          <div className={classNames([classes.contentWrapperText, "text"])}>
            <Text
              variant="gradient"
              gradient={{ from: "#27de40", to: "#008c13", deg: 45 }}
              sx={{ fontFamily: "Greycliff CF, sans-serif" }}
              ta="center"
              fz={24}
              fw={700}>
              Инвесторам от 50% годовых
            </Text>
            <Text color="black" sx={{ fontFamily: "Greycliff CF, sans-serif" }} ta="center" fz={15} fw={500}>
              Предложение для квалифицированных
              <br />
              инвесторов в оптовые партии телефонов
            </Text>
          </div>
        </div>
      </div>
      <div className={classes.item}>
        <div className={classNames([classes.contentWrapper, "content"])}>
          <div className={classNames([classes.contentWrapperImage, "image"])}>
            <img src={GlassImage} alt="" />
          </div>
          <div className={classNames([classes.contentWrapperText, "text"])}>
            <Text
              variant="gradient"
              gradient={{ from: "#af42c4", to: "#3e0849", deg: 45 }}
              sx={{ fontFamily: "Greycliff CF, sans-serif" }}
              ta="center"
              fz={24}
              fw={700}>
              О нас и иновациях
            </Text>
            <Text color="black" sx={{ fontFamily: "Greycliff CF, sans-serif" }} ta="center" fz={15} fw={500}>
              Технологии безлимитной связи и интернета.
              <br />
              Приложения которые приносят доход и многое другое
            </Text>
          </div>
        </div>
      </div>
      <div className={classes.item}>
        <div className={classNames([classes.contentWrapper, "content"])}>
          <div className={classNames([classes.contentWrapperImage, "image"])}>
            <img src={GlassImage} alt="" />
          </div>
          <div className={classNames([classes.contentWrapperText, "text"])}>
            <Text
              variant="gradient"
              gradient={{ from: "#000", to: "#555", deg: 45 }}
              sx={{ fontFamily: "Greycliff CF, sans-serif" }}
              ta="center"
              fz={24}
              fw={700}>
              Новости компании
            </Text>
            <Text color="black" sx={{ fontFamily: "Greycliff CF, sans-serif" }} ta="center" fz={15} fw={500}>
              Экосистема <strong>X-WORLD UNION</strong>
              <br />
              более 20 инновационных проектов
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};
