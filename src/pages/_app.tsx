import "@/styles/globals.css";
import { ThemeProvider } from "@emotion/react";
import theme from "../materialTheme";
import type { AppProps } from "next/app";
import { GlobalContextProvider } from "@/contexts/GlobalContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalContextProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </GlobalContextProvider>
  );
}
