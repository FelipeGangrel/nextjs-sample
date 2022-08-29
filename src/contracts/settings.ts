import { PayloadAction } from "@reduxjs/toolkit";

export interface SettingsState {
  language: "pt-BR" | "en";
}

export interface SetLanguageAction
  extends PayloadAction<SettingsState["language"]> {}
