import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthSlice {
  tokenData: string | null;
  isLogged: boolean;
}

const initialState: AuthSlice = {
  tokenData: null,
  isLogged: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<any>) {
      state.tokenData = action.payload;
    },
    setIsLogged(state, action: PayloadAction<any>) {
      state.isLogged = action.payload;
    },
  },
});

export const { setToken, setIsLogged } = authSlice.actions;
export const authReducer = authSlice.reducer;
