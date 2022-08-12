import React from 'react';
import { Route, Switch } from 'react-router-dom'
// import { Switch } from 'react-router'
const App = () => {
  return (

    <Switch>

      <Route path="/" exact    > This is home page</Route>
      <Route path="/about"     > This is about page</Route>
      <Route > Not Found 404 error</Route>
    </Switch>

  )
}

export default App;