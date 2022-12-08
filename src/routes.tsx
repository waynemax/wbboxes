import { useRoute } from "react-router5";
import { Route } from "shared/definitions";
import NotWrapper from "./pages/wrappers/NotWrapper";
import { NotFound } from "./pages/NotFound";
import { Clients, MainWrapper, Transactions, Client } from "./pages";

export default function Routes() {
  const routeState = useRoute();
  let Component: any = NotFound;
  let Wrapper: any = MainWrapper;

  switch (routeState.route.name) {
    case Route.CLIENTS_SCREEN:
      Wrapper = MainWrapper;
      Component = Clients;
      break;
    case Route.CLIENT_SCREEN:
      Wrapper = MainWrapper;
      Component = Client;
      break;
    case Route.TRANSACTIONS_SCREEN:
      Wrapper = MainWrapper;
      Component = Transactions;
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
