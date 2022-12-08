import axios from "axios";
import { auth, refreshToken } from "shared/utils/auth";
import { APP_ENV } from "../../app-env";

export const axiosInstance = axios.create();

axiosInstance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("access_token");
  config.headers = config.headers ?? {};
  if (accessToken) {
    const authString = `Bearer ${accessToken}`;
    config.headers.Authorization = authString;
  }
  config.headers["Content-type"] = config.headers["Content-type"] ?? "application/json";
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest.retryRequest) {
      originalRequest.retryRequest = true;
      const accessToken = await refreshToken();
      if (!accessToken) {
        return auth();
      }
      originalRequest.headers.Authorization = `Bearer ${accessToken}`;
      return axiosInstance(originalRequest);
    }
    if (originalRequest.retryRequest) {
      return auth();
    }
    return error;
  },
);

export const API_URL = APP_ENV.REACT_APP_API_WALLET_URL;
// export const API_URL = "https://s-lwapi-c7-dev.clim7.xyz/api/v1";
