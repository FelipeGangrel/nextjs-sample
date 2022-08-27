module.exports = {
  debug: process.env.NODE_ENV !== "production",
  reloadOnPrerender: process.env.NODE_ENV !== "production",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "pt-BR", "pt-PT"],
  },
  fallbackLng: {
    default: ["en"],
    "pt-PT": ["pt-BR"], // pt-PT will fallback to pt-BR
  },
};
