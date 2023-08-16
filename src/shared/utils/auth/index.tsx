import { API_URL } from "shared/definitions/api";

/**
 * @returns current access_token
 */
export const getAccessToken = () => {
  return window.localStorage.getItem("access_token");
};

export const saveAccessToken = (token: string) => {
  window.localStorage.setItem("access_token", token);
};

export const removeAccessToken = () => {
  return window.localStorage.removeItem("access_token");
};

export const auth = async () => {
  const { protocol, host, pathname } = window.location;
  const urlWithoutParams = encodeURIComponent(protocol + "//" + host + pathname);
  const loginUrlResponse = await (
    await fetch(`${API_URL}/api/v1/auth/login-page-url?redirect_uri=${urlWithoutParams}`)
  ).json();
  const loginUrl = loginUrlResponse.loginPageUrl;
  window.location.href = `${loginUrl}`;
};

/**
 *
 * @param secret get it from url after redirect from keycloak
 * @param redirectUrl must be the same as in /auth/login-page-url?redirect_url=...
 */
export const requestAccessToken = async (secret: string) => {
  const { protocol, host, pathname } = window.location;
  const urlWithoutParams = protocol + "//" + host + pathname;
  const fetchRes = await fetch(`${API_URL}/api/v1/auth/get-access-token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      code: secret,
      redirectUri: urlWithoutParams,
    }),
  });
  return (await fetchRes.json()) as { accessToken: string };
};

export async function refreshToken() {
  const token = getAccessToken();
  if (!token) {
    return null;
  }
  return (
    await fetch(`${API_URL}/api/v1/auth/refresh-access-token`, {
      method: "POST",
      body: JSON.stringify({
        accessToken: token,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
  )
    .json()
    .then((res) => {
      saveAccessToken(res.data.accessToken);
      return res.data.accessToken;
    })
    .catch(() => {
      removeAccessToken();
      return null;
    });
}

export const logOut = async () => {
  removeAccessToken();
  const redirectUri = encodeURIComponent(window.location.origin);
};
