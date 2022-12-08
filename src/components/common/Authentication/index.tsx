import { ReactElement, useEffect, useState } from "react";
import router from "router";
import { auth, getAccessToken, requestAccessToken, saveAccessToken } from "shared/utils/auth";
import { loadUserInfo } from "./utils";

type TProps = {
  children: ReactElement;
};

export function Authentication(props: TProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState<any>("");

  useEffect(() => {
    const params = router.getState().params;
    if (params.code) {
      requestAccessToken(params.code)
        .then((res) => {
          // eslint-disable-next-line no-debugger
          router.replaceHistoryState(router.getState().name, {
            ...router.getState().params,
            code: undefined,
            state: undefined,
            session_state: undefined,
          });
          saveAccessToken(res.accessToken);
          setIsAuthenticated(true);
        })
        .catch(setError);
    } else {
      const token = getAccessToken();
      if (!token) {
        auth();
      } else {
        loadUserInfo().then(() => {
          setIsAuthenticated(true);
        });
      }
    }
  }, []);

  if (isAuthenticated) {
    return props.children;
  }
  if (error) {
    return <>Unexpected error. Please, check your internet connection or try to sign in later.</>;
  }
  return null;
}
