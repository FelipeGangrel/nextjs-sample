import { configureStore, createSlice } from "@reduxjs/toolkit";
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

const settingsStore = configureStore({
  reducer: {
    [settingsSlice.name]: settingsSlice.reducer,
  },
});

export const getSettingsState = (): SettingsState => {
  const state = settingsStore.getState();
  return state[settingsSlice.name];
};
