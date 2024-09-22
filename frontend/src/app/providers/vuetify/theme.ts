import type { Blueprint, ThemeDefinition } from "vuetify";
import { mdi, aliases } from "vuetify/iconsets/mdi-svg";

export const COLORS: Colors = {
  primary: "#8347E0",
  secondary: "#7F7195",
  "secondary-lighten-1": "#756889",
  "secondary-darken-1": "#756889",
  success: "#05A609",
  error: "#FF5449",
  warning: "#F48700",
  info: "#2196F3",
  background: "#FFFBFE",
  surface: "#F7F2FA",
  "surface-container": "#F7F2FA",
  "surface-container-lowest": "#FFFFFF",
  "surface-container-high": "#ECE6F0",
  "surface-container-highest": "#E6E0E9",
  "on-surface-container": "#48464C",
  "on-surface-container-lowest": "#48464C",
  "on-surface-container-high": "#48464C",
  "on-surface-container-highest": "#48464C",
  "on-primary": "#FFFFFF",
  "on-background": "#1D1B20",
  "on-surface": "#48464C",
  "on-secondary": "#FFFFFF",
  "on-secondary-lighten-1": "#FFFFFF",
  "on-secondary-darken-1": "#756889",
  "on-info": "#FFFFFF",
  "on-error": "#FFFFFF",
  "on-success": "#FFFFFF",
  "on-warning": "#FFFFFF",
  "neutral-50": "#79767D"
};

export const theme: ThemeDefinition = {
  dark: false,
  variables: {
    "border-color": "#000000",
    "border-opacity": 0.12,
    "high-emphasis-opacity": 1,
    "medium-emphasis-opacity": 0.7,
    "disabled-opacity": 0.5,
    "idle-opacity": 0.04,
    "hover-opacity": 0.08,
    "focus-opacity": 0.12,
    "selected-opacity": 0.08,
    "activated-opacity": 0.08,
    "pressed-opacity": 0.12,
    "dragged-opacity": 0.08
  },
  colors: COLORS
};

export const blueprint: Blueprint = {
  defaults: {
    VBtn: {
      flat: true
    },
    VAppBar: {
      flat: true,
      border: true,
      color: "background",
      density: "comfortable"
    },
    VNavigationDrawer: {
      flat: true
    },
    VCard: {
      flat: true
    },
    VSheet: {
      flat: true
    },
    VTextField: {
      flat: true,
      bgColor: "surface-container-highest",
      variant: "solo",
      density: "comfortable"
    },
    VTextarea: {
      flat: true,
      bgColor: "surface-container-highest",
      variant: "solo"
    },
    VSelect: {
      flat: true,
      variant: "solo"
    }
  },
  display: {
    mobileBreakpoint: "lg",
    thresholds: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl: 2560
    }
  },
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi
    }
  },
  theme: {
    defaultTheme: "light",
    variations: false,
    themes: {
      light: theme
    }
  }
};

export interface Colors {
  background: string;
  surface: string;
  "surface-container": string;
  "surface-container-lowest": string;
  "surface-container-high": string;
  "surface-container-highest": string;
  primary: string;
  secondary: string;
  "secondary-darken-1": string;
  "secondary-lighten-1": string;
  success: string;
  warning: string;
  error: string;
  info: string;
  "on-background": string;
  "on-surface": string;
  "on-primary": string;
  "on-secondary": string;
  "on-secondary-lighten-1": string;
  "on-secondary-darken-1": string;
  "on-success": string;
  "on-warning": string;
  "on-error": string;
  "on-info": string;
  "on-surface-container": string;
  "on-surface-container-lowest": string;
  "on-surface-container-high": string;
  "on-surface-container-highest": string;
  [k: string]: string;
}
