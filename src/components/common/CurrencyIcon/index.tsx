import { switchMatch } from "shared/utils";
import { ReactComponent as Usdc } from "../../../shared/static/icons/adapted/coins/USDC.svg";
import { ReactComponent as Usdt } from "../../../shared/static/icons/adapted/coins/USDT.svg";
import { ReactComponent as Byn } from "../../../shared/static/icons/adapted/coins/BYN.svg";
import { ReactComponent as Rub } from "../../../shared/static/icons/adapted/coins/RUB.svg";
import { ReactComponent as Usd } from "../../../shared/static/icons/adapted/coins/USD.svg";
import { ReactComponent as Btc } from "../../../shared/static/icons/adapted/coins/BTC.svg";

type TProps = {
  icon: string;
  className?: string;
};

export const CurrencyIcon = (props: TProps) => {
  const Component = switchMatch(props.icon.toLowerCase(), {
    usdt: Usdt,
    usdc: Usdc,
    byn: Byn,
    rub: Rub,
    usd: Usd,
    btc: Btc,
    default: Usd,
  });
  return <Component className={props.className} />;
};
