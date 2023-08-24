import "./shared/static/styles/common.scss";
import { useRoute } from "react-router5";
import { MantineProvider } from "@mantine/core";
import { theme } from "shared/utils/mantine/theme";
import { store } from "store/store";
import { Provider } from "react-redux";
import Routes from "./routes";

export default function App(props: any) {
  const { route } = useRoute();

  return (
    <MantineProvider theme={theme} withCSSVariables withGlobalStyles withNormalizeCSS>
      <Provider store={store}>
        <Routes router={route !== undefined ? route : {}} {...props} />
      </Provider>
    </MantineProvider>
  );
}
