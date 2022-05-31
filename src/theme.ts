import { DefaultTheme } from "styled-components";

const size = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1440px",
  "3xl": "1920px",
};

export const theme: DefaultTheme = {
  colors: {
    veryDarkGray: "hsl(0, 0%, 17%)",
    darkGray: "hsl(0, 0%, 59%)",
  },
  fsize: {
    xs: "clamp(0.78rem, calc(0.73rem + 0.24vw), 1.12rem)",
    sm: "clamp(0.94rem, calc(0.87rem + 0.33vw), 1.40rem)",
    base: "clamp(1.13rem, calc(1.04rem + 0.45vw), 1.75rem)",
    lg: "clamp(1.35rem, calc(1.23rem + 0.60vw), 2.19rem)",
    xl: "clamp(1.62rem, calc(1.46rem + 0.80vw), 2.73rem)",
    "2xl": "clamp(1.94rem, calc(1.73rem + 1.05vw), 3.42rem)",
    "3xl": "clamp(2.33rem, calc(2.06rem + 1.39vw), 4.27rem)",
    "4xl": "clamp(2.80rem, calc(2.44rem + 1.82vw), 5.34rem)",
  },
  device: {
    sm: `(min-width: ${size.sm})`,
    md: `(min-width: ${size.md})`,
    lg: `(min-width: ${size.lg})`,
    xl: `(min-width: ${size.xl})`,
    "2xl": `(min-width: ${size["2xl"]})`,
    "3xl": `(min-width: ${size["3xl"]})`,
  },
};
