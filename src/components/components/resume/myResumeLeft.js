import React, { Component } from 'react';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class MyResumeLeft extends Component {
  render() {
    return (
      <div style={{ textAlign: 'left' }}>

        <h4 style={{ paddingLeft: '8px' }}>Experience</h4>
        <Experience
          startYear={2019}
          endYear='present'
          workName='Stowrzyszenie mali bracia Ubogich'
          workDescription='Helping with meeting in organization and visiting lonely elderly people'
        />
        <Experience
          startYear={2012}
          endYear={2019}
          workName='GOSU - boardgames, Owner'
          workDescription='I was doing everything :D'
        />
        <Experience
          startYear={2012}
          endYear={2012}
          workName='BDSklep, Marketing Trainee'
          workDescription='I was doing almost everything :D'
        />
        <hr style={{ borderTop: '3px solid #e22947' }} />
        <h4 style={{ paddingLeft: '8px' }}>Skills</h4>

        <Skills
          skill="HTML/CSS"
          progress={78}
        />
        <Skills
          skill="JavaScript"
          progress={68}
        />
        <Skills
          skill="React"
          progress={68}
        />
        <Skills
          skill="VueJS"
          progress={25}
        />

        <hr style={{ borderTop: '3px solid #e22947' }} />
        <h4 style={{ paddingLeft: '8px' }}>Education</h4>
        <Education
          startYear={2006}
          endYear={2011}
          schoolName="Poznań University of Economic and Business"
          schoolDescription="Informatics and Econometrics, Master Degree"
        />
      </div>
    )
  }
}

export default MyResumeLeft;