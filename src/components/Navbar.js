import React from 'react';
import {Layout, Header, Drawer, Navigation, Content} from 'react-mdl';
import Main from './main';


function Navbar() {
  return (
    <div className="demo-big-content">
    <Layout>
      <Header title="Title" scroll>
          <Navigation>
              <a href="/portfolio">Potrfolio</a>
              <a href="/myresume">Resume</a>
              <a href="/aboutme">About Me</a>
              <a href="/contact">Contact</a>
          </Navigation>
      </Header>
      <Drawer title="Title">
          <Navigation>
          <a href="/portfolio">Potrfolio</a>
              <a href="/myresume">Resume</a>
              <a href="/aboutme">About Me</a>
              <a href="/contact">Contact</a>
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