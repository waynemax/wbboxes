import { useRoute } from "react-router5";
import { Route } from "shared/definitions";
import NotWrapper from "./pages/wrappers/NotWrapper";
import { MainWrapper } from "./pages/wrappers/MainWrapper";
import { NotFound } from "./pages/NotFound";
import { Main } from "./pages";

export default function Routes() {
  const routeState = useRoute();
  let Component: any = NotFound;
  let Wrapper: any = MainWrapper;

  switch (routeState.route.name) {
    case Route.MAIN_SCREEN:
      Wrapper = MainWrapper;
      Component = Main;
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
