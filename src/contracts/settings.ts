import { PayloadAction } from "@reduxjs/toolkit";

export type Language = "pt-BR" | "en";

export interface SettingsState {
  language: Language;
}

export interface SetLanguageAction
  extends PayloadAction<SettingsState["language"]> {}
