import { useCallback, useState } from "react";
import { data, setQR, ThemesColors } from "shared/utils/QRLogic";
import { useRoute } from "react-router5";
import { Button, createStyles, Space } from "@mantine/core";
import classNames from "classnames";
import { switchMatch } from "shared/utils";
import { ReactComponent as GiftIcon } from "./assets/gift.svg";
import { HasGigt } from "../HasGift";

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
  gifts: {
    width: "100%",
    display: "grid",
    height: "100%",
    margin: "auto",
    gap: "8px",
    gridTemplateColumns: "repeat(3, 1fr)",
  },
  giftWrapper: {
    backgroundColor: "rgba(255,255,255,0.05)",
    minHeight: "15vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "8px",
    transition: "all 1000ms ease",
  },
  giftWrapperSelected: {
    transform: "scale(10)",
    opacity: 0,
  },
  giftIconWrapper: {
    display: "flex",
    flexDirection: "column",
    svg: {
      width: "60px",
      margin: "auto,",
    },
  },
}));

export const Lottery = () => {
  const { route } = useRoute();
  const url = route?.params?.q;
  const { classes } = useStyles();
  const [isLotteryStep, setIsLotteryStep] = useState(false);
  const [isRedirect, setIsRedirect] = useState(false);
  const [selectedGift, setSelectedGift] = useState<undefined | number>(undefined);

  const handleSetQR = useCallback(() => {
    setQR(url);
    setTimeout(() => {
      setIsRedirect(true);
    }, 1000);
  }, [url]);

  const config = data[url];

  if (isRedirect) {
    return <HasGigt />;
  }

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
      {!isLotteryStep && (
        <div>
          <div>
            <div>
              <h1>{config.brand}</h1>
            </div>
            <div>
              <h2 style={{ lineHeight: "30px" }}>Беспроигрышная лотерея</h2>
            </div>
          </div>
          <Space mt={24} />
          <div>Вы приобрели товар {config.name}, за это вам полагается подарок!</div>
          <Space mt={24} />
          <div>Хочешь подарок? Забирай свой!</div>
          <Button
            mt={36}
            variant="outline"
            size="xl"
            radius="lg"
            onClick={() => setIsLotteryStep(true)}
            sx={{
              color: ThemesColors[config.theme ?? "default"].textColorOnButton,
              backgroundColor: ThemesColors[config.theme ?? "default"].buttonBackgroundColor,
              borderColor: ThemesColors[config.theme ?? "default"].borderColor,
            }}>
            Забрать подарок
          </Button>
        </div>
      )}
      {isLotteryStep && (
        <div className={classes.gifts}>
          {Array.from(Array(9).keys()).map((i, k) => {
            return (
              <div
                onClick={() => {
                  setSelectedGift(k);
                  handleSetQR();
                }}
                key={`keygify${k}`}
                className={classNames(classes.giftWrapper, {
                  [classes.giftWrapperSelected]: selectedGift === k,
                })}
                style={{
                  backgroundColor: switchMatch(url, {
                    "stoliki": "#ffdbb3",
                    "powerbank-1": "#241150",
                    "default": "rgba(255,255,255,0.05)",
                  }),
                }}>
                <div className={classes.giftIconWrapper}>
                  <GiftIcon style={{ color: ThemesColors[config.theme ?? "default"].borderColor }} />
                  <div>{k + 1}</div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
