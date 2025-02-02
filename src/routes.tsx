import { useRoute } from "react-router5";
import { Route, SubRoute } from "shared/definitions";
import NotWrapper from "./pages/wrappers/NotWrapper";
import { NotFound } from "./pages/NotFound";
import { Main, MainWrapper } from "./pages";
import { TMPage } from "./pages/TM";

export default function Routes() {
  const routeState = useRoute();
  let Component: any = NotFound;
  let Wrapper: any = MainWrapper;

  switch (routeState.route.name) {
    case Route.MAIN_SCREEN:
      Wrapper = MainWrapper;
      Component = Main;
      break;
    case Route.GREEKDAR_SCREEN:
    case Route.ELLADA_FIT_SCREEN:
    case Route.DMS_SCREEN:
      Wrapper = NotWrapper;
      Component = TMPage;
      break;
    case `${Route.DMS_SCREEN}.${SubRoute.DMS_SCREEN_ACTIVATE}`:
    case `${Route.ELLADA_FIT_SCREEN}.${SubRoute.ELLADA_FIT_SCREEN_ACTIVATE}`:
    case `${Route.GREEKDAR_SCREEN}.${SubRoute.GREEKDAR_SCREEN_ACTIVATE}`:
      Wrapper = NotWrapper;
      Component = TMPage;
      break;
    default:
      Wrapper = NotWrapper;
      Component = NotFound;
      break;
  }

  return (
    <Wrapper routeState={routeState}>
      <Component routeState={routeState} />
    </Wrapper>
  );
}
