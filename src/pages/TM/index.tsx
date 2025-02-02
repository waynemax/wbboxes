import React from "react";
import { useRoute } from "react-router5";
import { Route } from "shared/definitions";
import { switchMatch } from "shared/utils";
import ElladaLogo from "shared/static/icons/png/ellada.png";
import { elladaStyles } from "./ellada";
import { greekdarStyles } from "./greekdar";
import { DMSStyles } from "./dms";

export const TMPage = () => {
  const { route } = useRoute();
  const { classes: cl1 } = elladaStyles();
  const { classes: cl2 } = greekdarStyles();
  const { classes: cl3 } = DMSStyles();

  let routeName = route.name;
  let isActivate = false;
  if (routeName.includes(".activate")) {
    routeName = routeName.split(".activate")[0];
    isActivate = true;
  }

  const classes = switchMatch(routeName, {
    [Route.ELLADA_FIT_SCREEN]: cl1,
    [Route.GREEKDAR_SCREEN]: cl2,
    default: cl3,
  });

  return (
    <div className={classes.body}>
      <div className={classes.container}>
        <div className={classes.header}>
          <img
            src={`${switchMatch(routeName, {
              [Route.ELLADA_FIT_SCREEN]: ElladaLogo,
              [Route.GREEKDAR_SCREEN]: "/images/x11.png",
              default: "/images/x7.png",
            })}`}
            alt="logotype"
            className={classes.logo}
          />
          <h1 className={classes.title}>
            {!isActivate &&
              switchMatch(routeName, {
                [Route.ELLADA_FIT_SCREEN]: "Спасибо за покупку продукции авторского бренда Ellada Fit!",
                [Route.GREEKDAR_SCREEN]: "Спасибо за покупку продукции авторского бренда GreekDar!",
                default: "Спасибо, что приобрели товар от нашего бренда DMS Electronics.",
              })}
            {isActivate && "Дорогой покупатель"}
          </h1>
        </div>
        <p className={classes.thanks}>
          {!isActivate &&
            switchMatch(routeName, {
              [Route.ELLADA_FIT_SCREEN]:
                "Мы надеемся, что Вы полюбите свой товар также сильно, как мы любим создавать его для Вас!",
              [Route.GREEKDAR_SCREEN]:
                "Мы надеемся, что Вы полюбите свой товар также сильно, как мы любим создавать его для Вас!",
              default: "Мы искренне благодарим вас за выбор нашей продукции.",
            })}
          {isActivate &&
            "Для активации гарантии на приобретенный товар, пожалуйста перейдите в чат с нашей поддержкой!"}
        </p>
        {!isActivate && (
          <div
            className={classes.section}
            onClick={() => {
              window.location.href = switchMatch(routeName, {
                [Route.ELLADA_FIT_SCREEN]: "/elladafit",
                [Route.GREEKDAR_SCREEN]: "/greekdarproducts",
                default: "/powerbank-1",
              });
            }}
            style={{
              backgroundImage: `url(/images/${switchMatch(routeName, {
                [Route.ELLADA_FIT_SCREEN]: "x3",
                [Route.GREEKDAR_SCREEN]: "x9",
                default: "x13",
              })}.png)`,
            }}>
            <h2 className={classes.subHeader}>
              <strong>Беспроигрышная лотерея</strong>
            </h2>
            <p className={classes.text}>Подарок каждому</p>
          </div>
        )}
        {!isActivate && (
          <div
            className={classes.section}
            onClick={() => {
              window.location.href = `/${route.name}/activate`;
            }}
            style={{
              backgroundImage: `url(/images/${switchMatch(routeName, {
                [Route.ELLADA_FIT_SCREEN]: "x2",
                [Route.GREEKDAR_SCREEN]: "x8",
                default: "x12",
              })}.png)`,
            }}>
            <h2 className={classes.subHeader}>
              <strong>Гарантийный талон</strong>
            </h2>
            <p className={classes.text}>Активация</p>
          </div>
        )}
        <div className={classes.centerText}>
          {!isActivate && "Остались вопросы? Свяжитесь с нами!"}
          {isActivate &&
            "За считанные минуты мы активируем вашу гарантию, и вам не придется переживать за качество и стабильность вашей покупки"}
        </div>
        {!isActivate && (
          <div
            className={classes.section}
            onClick={() => {
              window.open("https://univedubot.t.me/", "_blank");
            }}
            style={{
              backgroundImage: `url(/images/${switchMatch(routeName, {
                [Route.ELLADA_FIT_SCREEN]: "x5",
                [Route.GREEKDAR_SCREEN]: "x5",
                default: "x15",
              })}.png)`,
            }}>
            <h2 className={classes.subHeader}>
              <strong>Служба поддержки</strong>
            </h2>
            <p className={classes.text}>Telegram</p>
          </div>
        )}

        <div
          className={classes.section}
          onClick={() => {
            //
            window.location.href = `https://wa.me/79801926715?text=${encodeURIComponent(
              !isActivate
                ? "Здравствуйте! У меня есть вопрос!"
                : "Здравствуйте! Хочу активировать гарантию на ваш товар. Конкретную модель товара назову в следующем сообщении.",
            )}`;
          }}
          style={{
            backgroundImage: `url(/images/${switchMatch(routeName, {
              [Route.ELLADA_FIT_SCREEN]: "x4",
              [Route.GREEKDAR_SCREEN]: "x4",
              default: "x14",
            })}.png)`,
          }}>
          <h2 className={classes.subHeader}>
            <strong>Служба поддержки</strong>
          </h2>
          <p className={classes.text}>WhatsApp</p>
        </div>

        <div className={classes.afterText}>
          {switchMatch(routeName, {
            [Route.DMS_SCREEN]: isActivate
              ? "Работаем для Вас 24/7"
              : "Первооткрывай DMS: технологии будущего в дизайне молодости!",
            default: "Работаем для Вас 24/7",
          })}
        </div>

        <div className={classes.footer}>
          <img
            src={`/images/${switchMatch(routeName, {
              [Route.ELLADA_FIT_SCREEN]: "",
              [Route.GREEKDAR_SCREEN]: "x16",
              default: "x20",
            })}.png`}
            alt="Logo"
            className={classes.footerLogo}
          />
        </div>
      </div>
    </div>
  );
};
