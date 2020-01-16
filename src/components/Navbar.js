import React from 'react';
import { Layout, Header, Drawer, Navigation, Content } from 'react-mdl';
import Main from './main';
import '../css/navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navigation-content">
      <Layout className="navigation">
  <Header className="navigation header" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Kamila Bartnik Resume</Link>} scroll>
          <Navigation className="navigation bar">
            <a className="navigation bar a" href="/cv/">About Me</a>
            <a className="navigation bar a" href="/cv/#/myresume/">Resume</a>

            <a className="navigation bar a" href="/cv/#/portfolio/">Potrfolio</a>
            <a className="navigation bar a" href="/cv/#/contact/">Contact</a>
          </Navigation>
        </Header>
        <Drawer 
        // title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">About Me</Link>}
        >
          <Navigation>
            <a href="/cv/">About Me</a>
            <a href="/cv/#/myresume/">Resume</a>
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