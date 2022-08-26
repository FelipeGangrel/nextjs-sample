import { PayloadAction } from "@reduxjs/toolkit";

export interface SettingsState {
  language: "pt-BR" | "en-US" | "es-ES";
}

export interface SetLanguageAction
  extends PayloadAction<SettingsState["language"]> {}
