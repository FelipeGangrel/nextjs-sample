module.exports = {
  debug: process.env.NODE_ENV !== "production",
  reloadOnPrerender: process.env.NODE_ENV !== "production",
  nonExplicitSupportedLngs: true,
  i18n: {
    defaultLocale: "en",
    locales: ["en", "pt-BR", "pt-PT"],
  },
  fallbackLng: {
    default: ["en"],
    "pt-PT": ["pt-BR", "en"], // if a key is not found in pt-PT, try pt-BR and then en
  },
};
