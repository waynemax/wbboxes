import { allowsURLs, getQR, removeQR } from "shared/utils/QRLogic";
import { useRoute } from "react-router5";
import { NotFound } from "../NotFound";
import { HasGigt } from "./features/HasGift";
import { Lottery } from "./features";

export const Main = () => {
  const { route } = useRoute();
  const url = route?.params?.q.toLowerCase();

  if (!(allowsURLs.map((it) => it.toLowerCase()).indexOf(url.toLowerCase()) > -1)) {
    return <NotFound />;
  }

  const currentStorageQR = getQR();
  if (currentStorageQR === url || localStorage.getItem(url)) {
    return <HasGigt />;
  }

  if (currentStorageQR) {
    removeQR();
  }

  return <Lottery />;
};
