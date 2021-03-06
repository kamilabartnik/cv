import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Education extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <h6>{this.props.startYear} - {this.props.endYear}</h6>
          </Cell>
          <Cell col={8}>
            <h5 style={{marginTop: '8px'}}>{this.props.schoolName}</h5>
            <p>{this.props.schoolDescription}</p>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Education;