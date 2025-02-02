import createRouter, { Options } from "router5";
import browserPlugin from "router5-plugin-browser";
import listenersPlugin from "router5-plugin-listeners";
import { Route, SubRoute } from "shared/definitions";
import { switchMatch } from "shared/utils";

export const routes = [
  ...Object.values(Route).map((el) =>
    switchMatch(el, {
      [Route.DMS_SCREEN]: {
        name: el,
        path: "/dms",
        children: {
          name: SubRoute.DMS_SCREEN_ACTIVATE,
          path: "/activate",
        },
      },
      [Route.ELLADA_FIT_SCREEN]: {
        name: el,
        path: "/ellada-fit",
        children: {
          name: SubRoute.DMS_SCREEN_ACTIVATE,
          path: "/activate",
        },
      },
      [Route.GREEKDAR_SCREEN]: {
        name: el,
        path: "/gd",
        children: {
          name: SubRoute.DMS_SCREEN_ACTIVATE,
          path: "/activate",
        },
      },
      [Route.MAIN_SCREEN]: {
        name: el,
        path: "/:q<[a-zA-z0-9-]{1,16}>",
      },
      default: {
        name: el,
        path: `/${el}`,
      },
    }),
  ),
];

const params: Options | any = {
  defaultRoute: Route.NOT_FOUND,
  defaultParams: {},
  queryParamsMode: "loose",
  strictTrailingSlash: true,
};

const router = createRouter(routes, params);

router.usePlugin(
  browserPlugin({
    base: "",
    useHash: false,
    hashPrefix: "",
    mergeState: true,
    preserveHash: false,
    forceDeactivate: true,
  }),
);

router.usePlugin(listenersPlugin());

router.start();

export default router;
