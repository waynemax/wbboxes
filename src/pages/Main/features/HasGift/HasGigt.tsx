import { useRoute } from "react-router5";
// eslint-disable-next-line import/no-extraneous-dependencies
import Confetti from "react-confetti";
import { allowsURLs, data, getQR, ThemesColors } from "shared/utils/QRLogic";
import { Button, createStyles, Rating, Space } from "@mantine/core";
import classNames from "classnames";
import { useViewportSize } from "@mantine/hooks";
import { switchMatch } from "shared/utils";
import { NotFound } from "../../../NotFound";

const useStyles = createStyles(() => ({
  wrapper: {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    boxSizing: "border-box",
    overflow: "auto",
    padding: "36px",
    textAlign: "center",
    fontSize: "18px",
  },
}));

export const HasGigt = () => {
  const { route } = useRoute();
  const { classes } = useStyles();
  const url = route?.params?.q;
  const { width, height } = useViewportSize();

  if (!(allowsURLs.indexOf(url) > -1)) {
    return <NotFound />;
  }

  const currentStorageQR = getQR();

  if (!(allowsURLs.indexOf(currentStorageQR!) > -1)) {
    return <NotFound />;
  }

  const config = data[url];

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
          <h2>Поздравляем, Победитель!</h2>
        </div>
        <Space mt={24} />
        <div>
          <div>За оставленный отзыв 5 звезд с фото на товар</div>
          <div className="display_flex">
            <Rating
              mt={16}
              mb={16}
              defaultValue={5}
              size="xl"
              value={5}
              color={switchMatch(url, {
                darsonval: "white",
                default: "yellow",
              })}
              sx={{
                margin: "auto",
              }}
            />
          </div>
          <div>мы подарим тебе уникальную книгу, разработанную всей нашей командой:</div>
        </div>
        <Space mt={24} />
        <div>
          <strong>{config.giftName}</strong>
        </div>
        <Space mt={36} />
      </div>
      <Button
        mt={36}
        variant="outline"
        size="xl"
        radius="lg"
        onClick={() => {
          window.location.href =
            "https://wa.me/79801926715?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%B1%D1%80%D0%B0%D1%82%D1%8C%20%D1%81%D0%B2%D0%BE%D0%B9%20%D0%BF%D1%80%D0%B8%D0%B7%20-%20%D0%BA%D0%BD%D0%B8%D0%B3%D1%83%20%22(%D0%9D%D0%B0%D0%BF%D0%B8%D1%88%D0%B8%D1%82%D0%B5%20%D0%B7%D0%B4%D0%B5%D1%81%D1%8C%20%D0%BA%D0%B0%D0%BA%D1%83%D1%8E%20%D0%BA%D0%BD%D0%B8%D0%B3%D1%83%20%D0%B2%D1%8B%20%D0%B2%D1%8B%D0%B9%D0%B3%D1%80%D0%B0%D0%BB%D0%B8)%22%2C%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F%20%D0%B4%D0%BB%D1%8F%20%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D1%8F%20%D0%B2%D1%8B%D0%BF%D0%BE%D0%BB%D0%BD%D0%B8%D0%BB!%20%D0%9F%D1%80%D0%B8%D0%BA%D1%80%D0%B5%D0%BF%D0%BB%D1%8F%D1%8E%20%D1%81%D0%BA%D1%80%D0%B8%D0%BD%D1%88%D0%BE%D1%82%20%D1%81%20%D0%BE%D1%82%D0%B7%D1%8B%D0%B2%D0%BE%D0%BC.%20(%D0%BF%D1%80%D0%B8%D0%BA%D1%80%D0%B5%D0%BF%D0%B8%D1%82%D0%B5%20%D1%81%D0%BA%D1%80%D0%B8%D0%BD%D1%88%D0%BE%D1%82%20%D0%BA%20%D1%81%D0%BE%D0%BE%D0%B1%D1%89%D0%B5%D0%BD%D0%B8%D1%8E)%E2%80%9D";
        }}
        sx={{
          color: ThemesColors[config.theme ?? "default"].textColorOnButton,
          backgroundColor: ThemesColors[config.theme ?? "default"].buttonBackgroundColor,
          borderColor: ThemesColors[config.theme ?? "default"].borderColor,
        }}>
        Забрать подарок
      </Button>
      <Confetti numberOfPieces={500} width={width} height={height} tweenDuration={3000} recycle={false} />
    </div>
  );
};
