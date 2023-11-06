import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    ToggleItem: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    CloseMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export const { ToggleItem, CloseMenu } = appSlice.actions;
export default appSlice.reducer;
