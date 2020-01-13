import React from 'react';
import {Layout, Header, Drawer, Navigation, Content} from 'react-mdl';
import Main from './main';


function Navbar() {
  return (
    <div className="demo-big-content">
    <Layout>
      <Header title="Title" scroll>
          <Navigation>
              
              <a href="/cv/#/myresume/">Resume</a>
              <a href="/cv/#/aboutme">About Me</a>
              <a href="/cv/#/portfolio">Potrfolio</a>
              <a href="/cv/#/contact">Contact</a>
          </Navigation>
      </Header>
      <Drawer title="Title">
          <Navigation>
            <a href="/cv/#/myresume">Resume</a>
              <a href="/cv/#/aboutme">About Me</a>
              <a href="/cv/#/portfolio">Potrfolio</a>
              <a href="/cv/#/contact">Contact</a>
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