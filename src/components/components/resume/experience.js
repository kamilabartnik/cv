import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Experience extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <h6>{this.props.startYear} - {this.props.endYear}</h6>
          </Cell>
          <Cell col={8}>
            <h5 style={{marginTop: '8px', marginBottom:'0px'}}>{this.props.workName}</h5>
            <h6 style={{marginTop: '0px'}}><i>{this.props.position}</i></h6>
            <p>{this.props.workDescription}</p>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Experience;