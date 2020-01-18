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
          workName='Stowarzyszenie mali bracia Ubogich'
          position='volunteer'
          workDescription='Coorganization workshops and helping lonely elderly people'
        />
        <Experience
          startYear={2012}
          endYear={2019}
          workName='GOSU - boardgames'
          position='founder'
          workDescription='GOSU is a meeting place with boardgames, where you can buy, rent or play games. 
                          Due to my hard work, GOSU became well-known bordgames brand not only in Poznań,
                          GOSU won plebiscite for The Best Place in Poznań by poznan.naszemiasto.pl in 2015.
                          Runing my own business helps me understand how free market works, trained my social 
                          skills by working with clients and employees and organization skill.'
        />
        <Experience
          startYear={2012}
          endYear={2012}
          workName='BDSklep'
          position='marketing trainee'
          workDescription='I was responsible for newsletters (prepared content and HTML structure), BDsklep&rsquo;s website testing and marketing activities.'
        />
        <hr style={{ borderTop: '3px solid #e22947' }} />
        <h4 style={{ paddingLeft: '8px' }}>Skills (in progress)</h4>

        <Skills
          skill="HTML/CSS"
          progress={78}
          buffer={22}
        />
        <Skills
          skill="JavaScript"
          progress={68}
          buffer={60}
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