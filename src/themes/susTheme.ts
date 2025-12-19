import { createTheme } from "@mui/material/styles";
import { type PaletteMode } from "@mui/material";

const susTheme = (mode: PaletteMode) => {
  return createTheme({
    palette: {
      mode,

      ...(mode === "dark"
        ? {
            background: {
              default: "#111418",
              paper: "#161a20",
            },
            text: {
              primary: "#e4e7eb",
              secondary: "#b0b6bf",
            },
          }
        : {
            background: {
              default: "#f9fafb",
              paper: "#ffffff",
            },
            text: {
              primary: "#111418",
              secondary: "#4b5563",
            },
          }),
    },

    typography: {
      fontFamily: "Noto Sans JP",
      allVariants: {
        lineHeight: 1.5,
        fontStyle: "normal",
      },

      font34Strong: {
        fontSize: 34,
        fontWeight: 700,
      },

      font22Normal: {
        fontSize: 22,
        fontWeight: 400,
      },

      font18Normal: {
        fontSize: 18,
        fontWeight: 400,
      },
    },

    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
          },
        },
      },

      MuiOutlinedInput: {
        styleOverrides: {
          root: ({ theme }) => ({
            ...(theme.palette.mode === "dark" && {
              backgroundColor: "#ffffff",
              color: "#111418",

              "&:hover": {
                backgroundColor: "#ffffff",
                color: "#111418",
              },

              "&.Mui-focused": {
                backgroundColor: "#ffffff",
                color: "#111418",
              },
            }),
          }),
        },
      },
    },
  });
};

export default susTheme;
