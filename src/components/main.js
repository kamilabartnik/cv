import React from 'react';
import { Switch, Route } from 'react-router-dom';

// components
import MyResume from './components/myResume';
import LandingPage from './components/landingpage';
import Portfolio from './components/portfolio';
import Contact from './components/contact';

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/myresume" component={MyResume} />
    <Route path="/portfolio" component={Portfolio} />
    <Route path="/contact" component={Contact} />
  </Switch>
)

export default Main;