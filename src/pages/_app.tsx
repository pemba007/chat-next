import "@/styles/globals.css";
import { ThemeProvider } from "@emotion/react";
import theme from "../materialTheme";
import type { AppProps } from "next/app";
import { GlobalContextProvider } from "@/contexts/GlobalContext";
import { FriendsContextProvider } from "@/contexts/FriendsContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalContextProvider>
      <FriendsContextProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </FriendsContextProvider>
    </GlobalContextProvider>
  );
}
