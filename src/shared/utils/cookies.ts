/**
 *
 * returns the cookie with the given name,
 * or undefined if not found
 * @returns string
 */
export function getCookie(name: string) {
  const matches = document.cookie.match(
    new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"),
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

type TCookieOptions = {
  path?: string
  domain?: string
  expires?: number | Date | string
  sameSite?: "strict" | "Strict" | "lax" | "Lax" | "none" | "None"
  secure?: boolean
  [property: string]: any
}

export function setCookie(name: string, value: string, options: TCookieOptions = {}) {
  options = {
    path: "/",
    ...options,
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  Object.keys(options).forEach(optionKey => {
    updatedCookie += "; " + optionKey;
    const optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  });

  document.cookie = updatedCookie;
}

export function deleteCookie(name: string) {
  setCookie(name, "", {
    "max-age": -1
  });
}