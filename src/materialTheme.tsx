import { createTheme, responsiveFontSizes } from "@mui/material";
import { blue, lightBlue } from "@mui/material/colors";

var theme = createTheme({
  palette: {
    primary: {
      main: lightBlue[500],
      dark: lightBlue[700],
      light: lightBlue[100],
      contrastText: "#fff",
    },
    secondary: {
      main: blue["A200"],
    },
    contrastThreshold: 4.5,
  },
  typography: {
    fontSize: 12,
  },
});

theme = responsiveFontSizes(theme);

export default theme;
