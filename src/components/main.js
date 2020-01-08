import React from 'react';
import { Switch, Route } from 'react-router-dom';

// components
import MyResume from './components/myResume';
import LandingPage from './components/landingpage';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import AboutMe from './components/aboutme';

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/cv/myresume" component={MyResume} />
    <Route exact path="/cv/portfolio" component={Portfolio} />
    <Route exact path="/cv/contact" component={Contact} />
    <Route exact path="/cv/aboutme" component={AboutMe} />
  </Switch>
)

export default Main;