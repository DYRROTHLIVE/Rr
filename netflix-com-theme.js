// React Theme — extracted from https://www.netflix.com/
// Compatible with: Chakra UI, Stitches, Vanilla Extract, or any CSS-in-JS

/**
 * TypeScript type definition for this theme:
 *
 * interface Theme {
 *   colors: {
    primary: string;
    secondary: string;
    background: string;
    foreground: string;
    neutral50: string;
    neutral100: string;
    neutral200: string;
    neutral300: string;
    neutral400: string;
    neutral500: string;
    neutral600: string;
    neutral700: string;
    neutral800: string;
    neutral900: string;
 *   };
 *   fonts: {
    body: string;
 *   };
 *   fontSizes: {
    '13': string;
    '14': string;
    '16': string;
    '20': string;
    '24': string;
    '56': string;
    '100': string;
    '21.92': string;
    '14.4': string;
    '13.6': string;
    '13.008': string;
    '12.8': string;
 *   };
 *   space: {
    '1': string;
    '64': string;
    '96': string;
    '100': string;
    '128': string;
    '148': string;
    '314': string;
 *   };
 *   radii: {
    xs: string;
    md: string;
    lg: string;
    xl: string;
    full: string;
 *   };
 *   shadows: {
    sm: string;
    md: string;
    lg: string;
 *   };
 *   states: {
 *     hover: { opacity: number };
 *     focus: { opacity: number };
 *     active: { opacity: number };
 *     disabled: { opacity: number };
 *   };
 * }
 */

export const theme = {
  "colors": {
    "primary": "#e50914",
    "secondary": "#3860be",
    "background": "#000000",
    "foreground": "#ffffff",
    "neutral50": "#ffffff",
    "neutral100": "#000000",
    "neutral200": "#333333",
    "neutral300": "#232323",
    "neutral400": "#414141",
    "neutral500": "#555555",
    "neutral600": "#2d2d2d",
    "neutral700": "#f4f4f4",
    "neutral800": "#161616",
    "neutral900": "#808080"
  },
  "fonts": {
    "body": "'Netflix Sans', sans-serif"
  },
  "fontSizes": {
    "13": "13px",
    "14": "14px",
    "16": "16px",
    "20": "20px",
    "24": "24px",
    "56": "56px",
    "100": "100px",
    "21.92": "21.92px",
    "14.4": "14.4px",
    "13.6": "13.6px",
    "13.008": "13.008px",
    "12.8": "12.8px"
  },
  "space": {
    "1": "1px",
    "64": "64px",
    "96": "96px",
    "100": "100px",
    "128": "128px",
    "148": "148px",
    "314": "314px"
  },
  "radii": {
    "xs": "2px",
    "md": "8px",
    "lg": "16px",
    "xl": "20px",
    "full": "50px"
  },
  "shadows": {
    "sm": "rgb(128, 128, 128) 0px 0px 5px 0px",
    "md": "rgb(199, 197, 199) 0px 0px 12px 2px",
    "lg": "rgba(0, 0, 0, 0) 0px 2px 4px 0px, rgba(50, 50, 93, 0.1) 0px 7px 14px 0px"
  },
  "states": {
    "hover": {
      "opacity": 0.08
    },
    "focus": {
      "opacity": 0.12
    },
    "active": {
      "opacity": 0.16
    },
    "disabled": {
      "opacity": 0.38
    }
  }
};

// MUI v5 theme
export const muiTheme = {
  "palette": {
    "primary": {
      "main": "#e50914",
      "light": "hsl(357, 92%, 62%)",
      "dark": "hsl(357, 92%, 32%)"
    },
    "secondary": {
      "main": "#3860be",
      "light": "hsl(222, 54%, 63%)",
      "dark": "hsl(222, 54%, 33%)"
    },
    "background": {
      "default": "#000000",
      "paper": "#2d2d2d"
    },
    "text": {
      "primary": "#ffffff",
      "secondary": "#414141"
    }
  },
  "typography": {
    "fontFamily": "'Netflix Sans', sans-serif",
    "h1": {
      "fontSize": "56px",
      "fontWeight": "700",
      "lineHeight": "70px"
    },
    "h2": {
      "fontSize": "24px",
      "fontWeight": "500",
      "lineHeight": "24px"
    },
    "h3": {
      "fontSize": "20px",
      "fontWeight": "500",
      "lineHeight": "normal"
    },
    "body1": {
      "fontSize": "16px",
      "fontWeight": "400",
      "lineHeight": "normal"
    }
  },
  "shape": {
    "borderRadius": 8
  },
  "shadows": [
    "rgb(128, 128, 128) 0px 0px 5px 0px",
    "rgb(199, 197, 199) -3px -3px 5px -2px",
    "rgb(199, 197, 199) 0px 0px 12px 2px",
    "rgba(0, 0, 0, 0) 0px 2px 4px 0px, rgba(50, 50, 93, 0.1) 0px 7px 14px 0px"
  ]
};

export default theme;
