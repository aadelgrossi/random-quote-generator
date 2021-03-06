import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      text: string;
      secondary: string;
      tertiary: string;
      background: string;
      hover: string;
    };
  }
}
