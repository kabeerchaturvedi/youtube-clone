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
  },
});

export const { ToggleItem } = appSlice.actions;
export default appSlice.reducer;