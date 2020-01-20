import React, {Component} from 'react';
import '../../css/components/landingpage.css';
import {Grid, Cell} from 'react-mdl';

class Landing extends Component {
  render() {
    return (
      <div className="landing-page">
        <Grid className="landing-page langing-grid">
          <Cell col={12}>
            <img 
              src="https://github.com/kamilabartnik/cv/blob/master/src/assets/KamilaBartnik.jpg?raw=true"
              alt="avatar"
              className="landing-page avatar-image"
            />
            <div className="landing-page landing-banner">
              <h1 className="landing-page landing-banner banner-text">Front-end Developer</h1>
              <hr />
              <p>
                HTML/CSS&nbsp;|&nbsp;Bootstrap | JavaScript&nbsp;|&nbsp;ReactJS | Java&nbsp;|&nbsp;VueJS
              </p>
              <div className="social-links">

                {/* Linkedin */}
                <a href="https://www.linkedin.com/in/kamila-bartnik-01667a18/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                {/* GitHub */}
                <a href="https://github.com/kamilabartnik" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
                {/* FreeCodeCamp */}
                <a href="https://www.freecodecamp.org/kamilabartnik" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-free-code-camp" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;