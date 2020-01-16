import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Skills extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={12}>
            <div style={{display: 'flex'}}>{this.props.skill}</div>
            <ProgressBar 
            style={{margin: 'auto'}}
            
            progress={this.props.progress} buffer={98}/>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Skills;