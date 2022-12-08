import { switchMatch } from "./switchMatch";

export function encodeFilters(filters: any) {
  const encodeFiltersObj: any = {};
  Object.keys(filters).forEach((keyField) => {
    const value = filters[keyField];
    switchMatch(typeof filters[keyField], {
      string: () => {
        if (value.length) {
          encodeFiltersObj[keyField] = value;
        }
      },
      default: () => {
        if (value !== null) encodeFiltersObj[keyField] = value;
      },
    });
  });
  return encodeFiltersObj;
}
