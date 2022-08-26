import { createSlice } from "@reduxjs/toolkit";
import type { SettingsState, SetLanguageAction } from "contracts/settings";

const initialState: SettingsState = {
  language: "pt-BR",
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setLanguage: (state, action: SetLanguageAction) => {
      state.language = action.payload;
    },
  },
});
