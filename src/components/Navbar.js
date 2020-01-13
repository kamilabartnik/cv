import React from 'react';
import {Layout, Header, Drawer, Navigation, Content} from 'react-mdl';
import Main from './main';
import '../css/navbar.css';


function Navbar() {
  return (
    <div className="demo-big-content">
    <Layout className="navigation">
      <Header className="navigation header" title="Title" scroll>
          <Navigation className="navigation bar">
              <a className="navigation bar a" href="/cv/#/myresume/">Resume</a>
              <a className="navigation bar a" href="/cv/#/aboutme/">About Me</a>
              <a className="navigation bar a" href="/cv/#/portfolio/">Potrfolio</a>
              <a className="navigation bar a" href="/cv/#/contact/">Contact</a>
          </Navigation>
      </Header>
      <Drawer title="Title">
          <Navigation>
            <a href="/cv/#/myresume/">Resume</a>
              <a href="/cv/#/aboutme/">About Me</a>
              <a href="/cv/#/portfolio/">Potrfolio</a>
              <a href="/cv/#/contact/">Contact</a>
          </Navigation>
      </Drawer>
      <Content>
          <div className="page-content" />
          <Main />
      </Content>
    </Layout>
  </div>
  )
}

export default Navbar;