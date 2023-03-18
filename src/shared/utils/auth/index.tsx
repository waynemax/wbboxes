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
  // const token = getAccessToken();

  // const res = fetch(`${API_URL}/api/v1/auth/logout-url`)
  // https://keycloak-c7-dev.clim7.xyz/realms/c7-dev/protocol/openid-connect/logout?post_logout_redirect_uri=https%3A%2F%2Fkeycloak-c7-dev.clim7.xyz%2Frealms%2Fc7-dev%2Faccount%2F&id_token_hint=eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJjdC1lNzBjOEJqOWJfVlZXQmlTNmUyLVhuenBZcUdOQVVjQ2tSQlpaWXBnIn0.eyJleHAiOjE2Njk0MDgwNzUsImlhdCI6MTY2OTM3MjExMCwiYXV0aF90aW1lIjowLCJqdGkiOiJlMmQ1ZDgxNi00MjQ5LTQwYTYtYWJlNi00YmYyZmE2NGQ4NmUiLCJpc3MiOiJodHRwczovL2tleWNsb2FrLWM3LWRldi5jbGltNy54eXovcmVhbG1zL2M3LWRldiIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiIyZjg3NDdjYy00MGU2LTQ1YzQtOTYyZC00YTVkMDlkYmUxZDYiLCJ0eXAiOiJJRCIsImF6cCI6ImFjY291bnQiLCJzZXNzaW9uX3N0YXRlIjoiMjdiOTBlZjAtMGQyMi00MTJlLWI4NTAtMjgxZmZiNzExZTc2IiwiYWNyIjoiMSIsInNpZCI6IjI3YjkwZWYwLTBkMjItNDEyZS1iODUwLTI4MWZmYjcxMWU3NiIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwibmFtZSI6IlNlcmdleSBEZXJnYWNoZXYgKERldk9wcykiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJzLmRlcmdhY2hldkB0ZWNoamVkaS5jbyIsImdpdmVuX25hbWUiOiJTZXJnZXkiLCJmYW1pbHlfbmFtZSI6IkRlcmdhY2hldiAoRGV2T3BzKSIsImVtYWlsIjoicy5kZXJnYWNoZXZAdGVjaGplZGkuY28ifQ.IF1C7Qzlyr_W-E7_37rcPPGYUn-wepfVGoJoFuBA6PTghYxg10xgvvQzgYbnfx9zW9Cq18px9MG6GkI9uBv1jXVaWCXPcEMjBrEof4voOrgyphBtmd33R204DORkW8gI2P5X-IJUJz2vVVKMt92OHmLPM1RUe1iKam_nbHuo0a-SA9evz-r0h604wDVZVsvQmY8VCuIT_Plf95V-aePwt3l0nLECtWOgjyrlSN3Q6_XdgDP7r71bo3CRG_YCs3YJ1pQtpc1TL6Fv723NDjacsylQ4l-aRcJhU5HbBiupmCx-sJyivYsu9YU_afn9yUO3YkjMoZLv2tXrdIckrgkTDg

  removeAccessToken();
  const redirectUri = encodeURIComponent(window.location.origin);
};
