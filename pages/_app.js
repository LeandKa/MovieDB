import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { storeWrapper } from "../store/store";

const GlobalStyle = createGlobalStyle`
  body,html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
`;

const theme = {
  colors: {
    white: "#fff",
    red: "red",
    yellow: "#ffc107",
    black: "black",
  },
  fonts: {
    font: "Montserrat",
  },
};

function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
          <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default storeWrapper.withRedux(App);
