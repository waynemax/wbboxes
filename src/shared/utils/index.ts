export * from "./nformatter";
export * from "./isEmptyObject";
export * from "./switchMatch";
export * from "./isEmail";
export * from "./random";
export * from "./timeTreatment";

export function replaceAll(string: string, search: string, replace: string) {
  return string.split(search).join(replace);
}

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
