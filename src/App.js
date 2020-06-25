import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'
import logo from './logo.svg';
import Home from './Home.js';
import SideNav from './navs/SideNav.js'
import TopNav from './navs/TopNav.js'
import Dashboard from './Dashboard.js';
import Controls from './Controls.js';


class App extends React.Component {

  render() {
    return (
    <BrowserRouter>
    {document.documentElement.setAttribute('data-theme', 'dark')}  {/* Color palette */}
    <div className="navs">
      <TopNav></TopNav>
      <SideNav></SideNav>
    </div>
    <div className="container-fluid scrollable">
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/dashboard"><Dashboard /></Route>
        <Route exact path="/controls"><Controls /></Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}
}

export default App;
