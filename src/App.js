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
import Signin from "./Signin";
import Signup from "./Signup";
import Pro from "./Pro";


function App() {
  const LPtheme = createTheme(getLPTheme("dark"));

  return (
    <ThemeProvider theme={LPtheme}>
      <CssBaseline />
      <Router> 
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/product" component={Pro} />
          <Route path="/signin" component={Signin}/>
          <Route path="/signup" component={Signup}/>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
