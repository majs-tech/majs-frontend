import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppAppBar from "./components/AppAppBar";
import getLPTheme from "./getLPTheme";
import ProductPage from "./ProductPage";
import LandingPage from "./LandingPage";


function App() {
  const [mode, setMode] = React.useState("dark");
  const [showCustomTheme] = React.useState(true);
  const LPtheme = createTheme(getLPTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });

  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };
  return (
    <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
      <CssBaseline />
      <Router>
        <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/product" component={ProductPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
