import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      veryDarkGray: string;
      darkGray: string;
    };
    fsize: {
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
      "2xl": string;
      "3xl": string;
      "4xl": string;
    };
    device: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      "2xl": string;
      "3xl": string;
    };
  }
}
