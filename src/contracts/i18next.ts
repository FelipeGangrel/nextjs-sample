// import the default language json files
import common from "../../public/locales/en/common.json";
import counterPage from "../../public/locales/en/counter-page.json";

export interface Resources {
  common: typeof common;
  "counter-page": typeof counterPage;
}
