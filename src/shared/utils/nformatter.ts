export function Nformatter(num: any, digits: any) {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  const item = lookup
    .slice()
    .reverse()
    .find((it: any) => num >= it.value);
  return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
}

export function NSpacingFormatter(n: string | number) {
  return `${n.toString()}`
    .split("")
    .reverse()
    // eslint-disable-next-line no-nested-ternary
    .map((el, index) => (index % 3 !== 2 ? el : n.toString().indexOf(".") > -1 ? el : ` ${el}`))
    .reverse()
    .join("");
}
