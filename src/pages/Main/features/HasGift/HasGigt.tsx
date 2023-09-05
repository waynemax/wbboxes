import { useRoute } from "react-router5";
// eslint-disable-next-line import/no-extraneous-dependencies
import Confetti from "react-confetti";
import { allowsURLs, data, getQR, ThemesColors } from "shared/utils/QRLogic";
import { Button, createStyles, Rating, Space } from "@mantine/core";
import classNames from "classnames";
import { useViewportSize } from "@mantine/hooks";
import { switchMatch } from "shared/utils";
import { useEffect } from "react";
import { NotFound } from "../../../NotFound";

const useStyles = createStyles(() => ({
  wrapper: {
    width: "100%",
    minHeight: "calc(100vh - 120px)",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    overflow: "auto",
    padding: "36px",
    textAlign: "center",
    fontSize: "18px",
  },
  book: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "8px 0",
    img: {
      margin: "auto",
      maxHeight: "130px",
    },
  },
}));

export const HasGigt = () => {
  const { route } = useRoute();
  const { classes } = useStyles();
  const url = route?.params?.q;
  const { width, height } = useViewportSize();
  let config: any = {};
  const body = document.body;
  const html = document.documentElement;

  const h = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

  useEffect(() => {
    document.body.style.backgroundColor = `${ThemesColors[config.theme ?? "default"].backgroundColor}`;
  }, [config?.theme]);

  if (!(allowsURLs.indexOf(url) > -1)) {
    return <NotFound />;
  }

  const currentStorageQR = getQR();

  if (!localStorage.getItem(url)) {
    if (!(allowsURLs.indexOf(currentStorageQR!) > -1)) {
      return <NotFound />;
    }
  }

  config = data[url];

  return (
    <div
      className={classNames([classes.wrapper])}
      style={{
        backgroundColor: ThemesColors[config.theme ?? "default"].backgroundColor,
        color: ThemesColors[config.theme ?? "default"].textColor,
        boxShadow: `inset 0 0 0 10px ${ThemesColors[config.theme ?? "default"].backgroundColor}, inset 0 0 0 12px ${
          ThemesColors[config.theme ?? "default"].borderColor
        }`,
      }}>
      <div>
        <div>
          <h2 style={{ lineHeight: "20px" }}>
            <strong>Поздравляем!</strong>
          </h2>
        </div>
        <Space mt={16} />
        <div>
          <div>
            За оставленный <strong>отзыв 5 звезд</strong> с фото на товар
          </div>
          <div className="display_flex">
            <Rating
              mt={12}
              mb={12}
              defaultValue={5}
              size="md"
              value={5}
              color={switchMatch(url, {
                default: "yellow",
              })}
              sx={{
                margin: "auto",
              }}
            />
          </div>
          <div style={{ fontSize: "16px" }}>Мы подарим тебе уникальную книгу, разработанную всей нашей командой:</div>
        </div>
        <Space mt={16} />
        <div>
          <strong style={{ fontSize: "16px" }}>«{config.giftName}»</strong>
        </div>
        <div className={classes.book}>
          <img alt="book" src={config.giftImage} />
        </div>
        <Space mt={16} />
      </div>
      <Button
        variant="outline"
        size="xl"
        radius="lg"
        onClick={() => {
          window.location.href = `https://wa.me/79801926715?text=${encodeURIComponent(
            "Здравствуйте! Хочу забрать свой приз - книгу «",
          )}${encodeURIComponent(config.giftName)}${encodeURIComponent(
            "»! Условия для получения выполнил! Прикрепляю скриншот с отзывом. (прикрепите скриншот к сообщению)”",
          )}`;
        }}
        sx={{
          color: ThemesColors[config.theme ?? "default"].textColorOnButton,
          backgroundColor: ThemesColors[config.theme ?? "default"].buttonBackgroundColor,
          borderColor: ThemesColors[config.theme ?? "default"].borderColor,
        }}>
        Забрать подарок
      </Button>
      {height > 0 && <Confetti numberOfPieces={500} width={width} height={h} tweenDuration={3000} recycle={false} />}
    </div>
  );
};
