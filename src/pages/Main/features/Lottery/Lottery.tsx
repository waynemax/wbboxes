import { useCallback, useEffect, useState } from "react";
import { data, setQR, ThemesColors } from "shared/utils/QRLogic";
import { useRoute } from "react-router5";
import { Button, createStyles, Space } from "@mantine/core";
import classNames from "classnames";
import { switchMatch } from "shared/utils";
import GreekDarLogo from "shared/static/icons/png/greekdar.png";
import GreekDarLogoBlack from "shared/static/icons/png/greekdar_black.png";
// import DMSLogoBlack from "shared/static/icons/png/dms_black.png";
import GiftCofee from "shared/static/icons/png/gift_coffee.png";
import GiftGold from "shared/static/icons/png/gift_gold.png";
import GiftGreen from "shared/static/icons/png/gift_green.png";
import GiftRed from "shared/static/icons/png/gift_red.png";
import GiftViolet from "shared/static/icons/png/gift_violet.png";
import GiftYellow from "shared/static/icons/png/gift_yellow.png";
import DMSLogo from "shared/static/icons/png/dms.png";
import ElladaLogo from "shared/static/icons/png/ellada.png";
import { HasGigt } from "../HasGift";

const useStyles = createStyles(() => ({
  wrapper: {
    width: "100%",
    minHeight: "calc(100vh - 120px)",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
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
    margin: "0 auto",
    gap: "8px",
    gridTemplateColumns: "repeat(3, 1fr)",
  },
  giftWrapper: {
    backgroundColor: "rgba(255,255,255,0.05)",
    minHeight: "60px",
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
  logo: {
    img: {
      maxHeight: "150px",
    },
  },
}));

export const Lottery = () => {
  const { route } = useRoute();
  const url = route?.params?.q.toLowerCase();
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

  useEffect(() => {
    document.body.style.backgroundColor = `${ThemesColors[config.theme ?? "default"].backgroundColor}`;
  }, [config.theme]);

  if (isRedirect) {
    return <HasGigt />;
  }

  return (
    <div
      className={classNames([classes.wrapper, "no_select"])}
      style={{
        ...{
          backgroundColor: ThemesColors[config.theme ?? "default"].backgroundColor,
          color: ThemesColors[config.theme ?? "default"].textColor,
          boxShadow: `inset 0 0 0 10px ${ThemesColors[config.theme ?? "default"].backgroundColor}, inset 0 0 0 12px ${
            ThemesColors[config.theme ?? "default"].borderColor
          }`,
          alignItems: isLotteryStep ? "flex-start" : "center",
          justifyContent: isLotteryStep ? "flex-start" : "center",
        },
      }}>
      {!isLotteryStep && (
        <div>
          <div>
            <Space mt={24} />
            <div className={classes.logo}>
              {switchMatch(config.theme, {
                coffeeLight: <img src={GreekDarLogoBlack} alt="gd" />,
                default: switchMatch(config.brand.toLowerCase(), {
                  ellada: <img src={ElladaLogo} alt="Ellada" />,
                  greekdar: <img src={GreekDarLogo} alt="greek dar" />,
                  dms: <img src={DMSLogo} alt="dms" />,
                  default: <img src={GreekDarLogo} alt="greek dar" />,
                }),
              })}
            </div>
            <Space mt={24} />
            <div>
              <h3 style={{ lineHeight: "30px" }}>Беспроигрышная лотерея</h3>
            </div>
          </div>
          <Space mt={24} />
          <div>
            Хочешь подарок?
            <br />
            Забирай свой!
          </div>
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
        <div className="w-100">
          <h3>
            А теперь
            <br />
            выбери свой приз!
          </h3>
          <Space mt={24} />
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
                      "stoliki": "#faf0e6",
                      "powerbank-1": "#241150",
                      "default": "rgba(255,255,255,0.05)",
                    }),
                  }}>
                  <div className={classes.giftIconWrapper}>
                    <img
                      alt="gift"
                      src={switchMatch(url.toLowerCase(), {
                        "melniza": GiftCofee,
                        "blender": GiftCofee,
                        "vinnabor": GiftRed,
                        "darsonval": GiftGreen,
                        "stoliki": GiftRed,
                        "powerbank-1": GiftViolet,
                        "elladafit": GiftGold,
                        "greekdarproducts": GiftYellow,
                        "default": GiftYellow,
                      })}
                    />
                    <div>{k + 1}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
