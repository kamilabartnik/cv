import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import '../../css/components/resume.css';

import MyResumeRight from './resume/myResumeRight';
import MyResumeLeft from './resume/myResumeLeft';

class MyResume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <MyResumeRight />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <MyResumeLeft />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default MyResume;