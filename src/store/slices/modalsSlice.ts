import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalsSlice {
  authModalIsOpened: boolean;
}

const initialState: ModalsSlice = {
  authModalIsOpened: false,
};

const modalsSlice = createSlice({
  name: "modals",
  initialState,

  reducers: {
    authModalSetIsOpened(state, action: PayloadAction<boolean>) {
      state.authModalIsOpened = action.payload;
    },
  },
});

export const { authModalSetIsOpened } = modalsSlice.actions;
export const modalsReducer = modalsSlice.reducer;
