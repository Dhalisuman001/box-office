import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Show from "./pages/Show";
import Starred from "./pages/Starred";
import { ThemeProvider } from "styled-components";


const theme = {
  mainColors: {
    blue: '#2400ff',
    gray: '#c6c6c6',
    dark: '#353535',
  },
};

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route exact path="/Starred">
          <Starred />
        </Route>
        <Route exact path="/show/:id">
          <Show />
        </Route>
        <Route> Not Found 404 error</Route>
      </Switch>
    </ThemeProvider>
  );
};

export default App;
