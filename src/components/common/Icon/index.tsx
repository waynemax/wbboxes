import { useMemo } from "react";
import { ReactComponent as Usdc } from "../../../shared/static/icons/coins/USDC.svg";
import { ReactComponent as Usdt } from "../../../shared/static/icons/coins/USDT.svg";
import { ReactComponent as Byn } from "../../../shared/static/icons/coins/BYN.svg";
import { ReactComponent as Rub } from "../../../shared/static/icons/coins/RUB.svg";
import { ReactComponent as Usd } from "../../../shared/static/icons/coins/USD.svg";

type TProps = {
  icon: string;
  className?: string;
};

export const CurrencyIcon = (props: TProps) => {
  const Component = useMemo(() => {
    switch (props.icon) {
      case "usdt":
        return Usdt;
      case "usdc":
        return Usdc;
      case "byn":
        return Byn;
      case "rub":
        return Rub;
      case "usd":
        return Usd;
      default:
        return Usd;
    }
  }, [props.icon, props.className]);

  return <Component className={props.className} />;
};
