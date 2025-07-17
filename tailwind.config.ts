import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Agency Brand Colors
        agency: {
          red: "#E44234",
          orange: "#FF9A29",
          blue: "#1679C0",
        },
        // Neutral Colors
        neutral: {
          900: "#1D1D1F",
          600: "#5F5F60",
          100: "#F7F7F7",
        },
        // Feedback Colors
        success: "#2AA972",
        warning: "#FFB726",
        error: "#E02E2E",
      },
      fontFamily: {
        rounded: ["Feather Bold", "system-ui", "sans-serif"],
        primary: ["SF Pro", "Inter", "Roboto", "Noto Sans JP", "sans-serif"],
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "20px",
        xl: "24px",
        "2xl": "32px",
        "4xl": "40px",
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        xxl: "32px",
        xxxl: "48px",
        mega: "64px",
      },
      borderRadius: {
        xs: "4px",
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.08)",
        hover: "0 4px 16px rgba(0,0,0,0.12)",
        modal: "0 8px 32px rgba(0,0,0,0.16)",
        tooltip: "0 2px 8px rgba(0,0,0,0.1)",
      },
      maxWidth: {
        content: "1440px",
        hero: "1200px",
      },
      minHeight: {
        touch: "44px",
      },
      scale: {
        "98": "0.98",
      },
      lineClamp: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
      },
    },
  },
  plugins: [
    // Line clamp プラグイン
    function ({ addUtilities }: any) {
      const newUtilities = {
        ".line-clamp-1": {
          display: "-webkit-box",
          "-webkit-line-clamp": "1",
          "-webkit-box-orient": "vertical",
          overflow: "hidden",
        },
        ".line-clamp-2": {
          display: "-webkit-box",
          "-webkit-line-clamp": "2",
          "-webkit-box-orient": "vertical",
          overflow: "hidden",
        },
        ".line-clamp-3": {
          display: "-webkit-box",
          "-webkit-line-clamp": "3",
          "-webkit-box-orient": "vertical",
          overflow: "hidden",
        },
        ".line-clamp-4": {
          display: "-webkit-box",
          "-webkit-line-clamp": "4",
          "-webkit-box-orient": "vertical",
          overflow: "hidden",
        },
        ".line-clamp-5": {
          display: "-webkit-box",
          "-webkit-line-clamp": "5",
          "-webkit-box-orient": "vertical",
          overflow: "hidden",
        },
        ".line-clamp-6": {
          display: "-webkit-box",
          "-webkit-line-clamp": "6",
          "-webkit-box-orient": "vertical",
          overflow: "hidden",
        },
      };
      addUtilities(newUtilities);
    },
    // スクリーンリーダー専用クラス
    function ({ addUtilities }: any) {
      addUtilities({
        ".sr-only": {
          position: "absolute",
          width: "1px",
          height: "1px",
          padding: "0",
          margin: "-1px",
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          borderWidth: "0",
        },
      });
    },
  ],
};
export default config;
