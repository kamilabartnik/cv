import React from 'react';
import { Switch, Route } from 'react-router-dom';

// components
import MyResume from './components/myResume';
import LandingPage from './components/landingpage';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
// import Music from './projMusic/music';
import MusicIndex from './projMusic/layout/musicIndex';
import { Provider } from './projMusic/contex';

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/myresume" component={MyResume} />
    <Route path="/portfolio" component={Portfolio} />
    <Route path="/contact" component={Contact} />
    <Provider>
    <Route exact path="/music" component={MusicIndex} />
    </Provider>
    {/* <Route path="/music/music" component={Music} /> */}
  </Switch>
)

export default Main;