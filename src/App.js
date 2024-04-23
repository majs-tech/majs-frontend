import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
// import AppAppBar from "./components/AppAppBar";
import getLPTheme from "./getLPTheme";
import LandingPage from "./LandingPage";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Pro from "./components/Pro";
import Terms from "./components/Terms"; 
// import Copilot from "./components/Copilot";
// import Docs from "./components/Docs";


function App() {
  const LPtheme = createTheme(getLPTheme("dark"));

  return (
    <ThemeProvider theme={LPtheme}>
      <CssBaseline />
      <Router> 
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/product" component={Pro} />
          {/* <Route path="/copilot" component={Copilot} /> */}
          {/* <Route path="/docs" component={Docs} /> */}
          <Route path="/signin" component={Signin}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/terms" component={Terms}/> 
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
