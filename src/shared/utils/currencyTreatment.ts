import { NSpacingFormatter } from "./nformatter";
import { handleExtraZeros } from "./handleExtraZeros";

export const currencyTreatment = (n: number | string, currency: any) => {
  if (currency?.isFiat) {
    return (+handleExtraZeros(n.toString())).toFixed(2);
  }
  if (n.toString().indexOf(".") > -1) {
    const fractionDigits = n.toString().split(".")[1];
    if (fractionDigits.length > 8) {
      return handleExtraZeros((+n).toFixed(8));
    }
    return NSpacingFormatter(handleExtraZeros(n));
  }
  return NSpacingFormatter(n);
};
