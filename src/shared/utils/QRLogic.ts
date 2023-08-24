const storageKeyPrefix = "product_";
const storageKey = "qr_";

type TTheme = "fruits" | "vine" | "sea" | "neon" | "coffeeLight" | "coffeeDark";

// const themesEnum: TTheme[] = ["fruits", "vine", "sea", "neon", "coffeeLight", "coffeeDark"];

type TQR = {
  name: string;
  brand: string;
  theme: TTheme;
  giftName: string;
};

export const data: Record<string, TQR> = {
  "melniza": {
    name: "Электромельница",
    brand: "GreekDar",
    theme: "coffeeDark",
    giftName: "Рецепты красоты и молодости. Натуральные средства для женского сияния.",
  },
  "powerbank-1": {
    name: "Продукт Dark Shark",
    brand: "DMS",
    theme: "neon",
    giftName: "Комфортный фитнес. Секреты эффективных домашних тренировок.",
  },
  "darsonval": {
    name: "Аппарат Дарсонваль",
    brand: "GreekDar",
    theme: "sea",
    giftName: "Рецепты красоты и молодости. Натуральные средства для женского сияния.",
  },
  "vinnabor": {
    name: "Винный набор",
    brand: "GreekDar",
    theme: "vine",
    giftName: "Вино как отдельный вид искусства. Мастерство создания и искусство потребления.",
  },
  "blender": {
    name: "Блендер",
    brand: "GreekDar",
    theme: "fruits",
    giftName: "Рецепты красоты и молодости. Натуральные средства для женского сияния.",
  },
  "stoliki": {
    name: "Столика-поднос",
    brand: "GreekDar",
    theme: "coffeeLight",
    giftName: "Вино как отдельный вид искусства. Мастерство создания и искусство потребления.",
  },
};

export const ThemesColors: {
  [key: string]: {
    backgroundColor: string;
    primaryColor: string;
    borderColor: string;
    textColor: string;
    textColorOnButton: string;
    buttonBackgroundColor: string;
  };
} = {
  default: {
    backgroundColor: "#0e002e",
    primaryColor: "#a201ff",
    borderColor: "#a201ff",
    textColor: "#ffffff",
    buttonBackgroundColor: "transparent",
    textColorOnButton: "#ffffff",
  },
  neon: {
    backgroundColor: "#0e002e",
    primaryColor: "#a201ff",
    borderColor: "#a201ff",
    textColor: "#ffffff",
    buttonBackgroundColor: "transparent",
    textColorOnButton: "#ffffff",
  },
  fruits: {
    backgroundColor: "#262626",
    primaryColor: "#f0d379",
    borderColor: "#f0d379",
    textColor: "#ffffff",
    buttonBackgroundColor: "transparent",
    textColorOnButton: "#ffffff",
  },
  vine: {
    backgroundColor: "#262626",
    primaryColor: "#72001c",
    borderColor: "#72001c",
    textColor: "#ffffff",
    buttonBackgroundColor: "#72001c",
    textColorOnButton: "#ffffff",
  },
  sea: {
    backgroundColor: "#005b52",
    primaryColor: "#ffe0db",
    borderColor: "#eb9587",
    textColor: "#ffffff",
    buttonBackgroundColor: "#ffe0db",
    textColorOnButton: "#005b52",
  },
  coffeeLight: {
    backgroundColor: "#fff5ea",
    primaryColor: "#8d6f57",
    borderColor: "#8d6f57",
    textColor: "#000000",
    buttonBackgroundColor: "#8d6f57",
    textColorOnButton: "#ffffff",
  },
  coffeeDark: {
    backgroundColor: "#262626",
    primaryColor: "#ff9d00",
    borderColor: "#ff9d00",
    textColor: "#ffffff",
    buttonBackgroundColor: "#3d2f21",
    textColorOnButton: "#ffffff",
  },
};

export const allowsKeys = [
  `${storageKeyPrefix}melniza`,
  `${storageKeyPrefix}powerbank-1`,
  `${storageKeyPrefix}darsonval`,
  `${storageKeyPrefix}vinnabor`,
  `${storageKeyPrefix}blender`,
  `${storageKeyPrefix}stoliki`,
];

export const allowsURLs = ["melniza", "powerbank-1", "darsonval", "vinnabor", "blender", "stoliki"];

export const setQR = (setKey: string) => {
  if (allowsKeys.indexOf(`${storageKeyPrefix}${setKey}`) > -1) {
    window?.localStorage.setItem(storageKey, setKey);
  }
};

export const getQR = () => {
  const current = window?.localStorage.getItem(storageKey);
  if (!current) return null;
  return current.split(storageKeyPrefix)[0];
};

export const removeQR = () => {
  window?.localStorage.removeItem(storageKey);
};

export function getVars() {
  const $GET: any = {};
  const $xGET: any = window.location.search.substring(1).split("&");

  for (let i = 0; i < $xGET.length; i++) {
    const getVar = $xGET[i].split("=");

    if ($xGET[i] !== "") {
      $GET[getVar[0]] = typeof getVar[1] === "undefined" ? "" : getVar[1];
    }
  }
  return $GET;
}
