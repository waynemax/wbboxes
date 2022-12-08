export const handleExtraZeros = (n: string | number) => {
  n = n.toString();
  const res = n.split(".").length > 1 ? n.replace(/0*$/, "") : n;
  if (res[res.length - 1] === ".") {
    return res.slice(0, res.length - 1);
  }
  return res;
};
