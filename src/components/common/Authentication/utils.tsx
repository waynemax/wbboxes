import { API_URL, axiosInstance } from "shared/definitions/api";

export async function loadUserInfo() {
  return axiosInstance.get<any>(`${API_URL}/swap/api/v1/account`);
}
