import React, {Component} from 'react';
import '../../css/components/landingpage.css';
import {Grid, Cell} from 'react-mdl';
import image from '../../assets/KamilaBartnik.jpg'

class Landing extends Component {
  render() {
    return (
      <div className="landing-page">
        <Grid className="langing-grid">
          <Cell col={12}>
            <img 
              src="cv/src/assets/KamilaBartnik.jpg"
              alt="avatar"
              className="avatar-image"
            />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;