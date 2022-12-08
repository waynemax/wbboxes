import "./index.css";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router5";
import App from "./App";
import router from "./router";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const Application = () => (
  <RouterProvider router={router}>
    <App router={router} />
  </RouterProvider>
);

root.render(<Application />);
