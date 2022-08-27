import "next-i18next";

import { Resources as MyResources } from "contracts/i18next";

declare module "next-i18next" {
  interface Resources extends MyResources {}
}
