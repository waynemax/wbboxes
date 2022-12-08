// @ts-ignore
/* eslint-disable */

type KeyAppEnv = "REACT_APP_API_WALLET_URL";

type APP_ENV = { [key in KeyAppEnv]: any };

export const APP_ENV: APP_ENV =
  (window as any).env ||
  Object.keys(process.env).reduce((acc: { [key: string]: any }, key: string) => {
    if (key.indexOf("REACT_APP_") === 0) {
      let value: any = String(process.env[key]);
      if (value.replace(/[^\d.-]/gi, "") === value) {
        const num = parseFloat(value);
        if (!isNaN(num) && isFinite(num)) {
          value = num;
        }
      } else if (value === "true") {
        value = true;
      } else if (value === "false") {
        value = false;
      } else {
        try {
          value = JSON.parse(value);
        } catch (err) {}
      }
      if (typeof value !== undefined) {
        acc[key] = value;
      }
    }
    return acc;
  }, {});

/* eslint-enable */
