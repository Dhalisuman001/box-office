import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Starred from './pages/Starred';
const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>

        <Route path="/" exact    > <Home /></Route>
        <Route path="/about"     > <Starred /></Route>
        <Route > Not Found 404 error</Route>
      </Switch>
    </div>

  )
}

export default App;