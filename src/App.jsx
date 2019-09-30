import React from "react";
import "./App.scss";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import theme from "./assets/theme";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Navigation />
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
