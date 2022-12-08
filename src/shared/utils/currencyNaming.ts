import { switchMatch } from "shared/utils/switchMatch";

export const CurrencyNaming = (code: string) =>
  switchMatch(code.toLowerCase(), {
    byn: "Рубль",
    usd: "Доллар",
    eur: "Евро",
    default: "--",
  });
