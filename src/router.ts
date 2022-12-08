import createRouter, { Options } from "router5";
import browserPlugin from "router5-plugin-browser";
import listenersPlugin from "router5-plugin-listeners";
import { Route } from "shared/definitions";
import { switchMatch } from "shared/utils";

export const routes = [
  ...Object.values(Route).map((el) =>
    switchMatch(el, {
      [Route.CLIENTS_SCREEN]: {
        name: el,
        path: "/",
      },
      [Route.CLIENT_SCREEN]: {
        name: el,
        path: `/${el}/:cid`,
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
