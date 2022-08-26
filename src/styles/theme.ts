export const palette = {
  // neutral
  white: "#FFFFFF",
  black: "#000000",
  // colors
  blue: "hsl(210, 88%, 69%)",
  green: "hsl(142, 80%, 82%)",
  red: "hsl(346, 65%, 44%)",
  light: "hsl(48, 74%, 92%)",
  dark: "hsl(184, 100%, 3%)",
};

export const theme = {
  palette,
  colors: {
    primary: palette.blue,
    secondary: palette.green,
    danger: palette.red,
    background: palette.light,
    text: palette.dark,
  },
  borderRadius: "0.2rem",
};
