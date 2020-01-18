import React, { Component } from 'react';
import Skills from './skills';

class MyResumeRight extends Component {
  render() {
    return (
      <div>
        <div style={{ textAlign: 'center' }}>
          <img
            src="https://github.com/kamilabartnik/cv/blob/master/src/assets/KamilaBartnik.jpg?raw=true"
            alt="avatar"
            style={{ height: '200px', paddingTop: '2em' }}
          />
        </div>
        <h2 style={{ paddingTop: '0.5em' }}>Kamila Bartnik</h2>
        <h4 style={{ color: 'grey' }}> Programmer </h4>
        <hr style={{ borderTop: '3px solid #2f222f', width: '100%' }} />
        <p>
          After 7 years of creating my own tabletop games brand,
          I decided to came back to subject related to my education
          and restarted learning programming languages. Through Java
          and Vue.js I discovered ReactJS which stole my heart.
          </p>
        <hr style={{ borderTop: '3px solid #2f222f', width: '100%' }} />
        <p>
          <Skills
            skill="Creativity"
            progress={95}
          />
          <Skills
            skill="Social skills"
            progress={92}
          />
          <Skills
            skill="Self Motivation"
            progress={92}
          />
        </p>
        <hr style={{ borderTop: '3px solid #2f222f', width: '100%' }} />
        <h5>Adress</h5>
        <p>Poznań</p>
        <h5>Phone</h5>
        <p>505 998 053</p>
        <h5>Email</h5>
        <p>kbartnik@g.pl</p>
        <hr style={{ borderTop: '3px solid #2f222f', width: '100%' }} />
        <h5>Hobbies</h5>
        <p> boardgames, books (especially popular science), hand craft, ukulele, irish dance, pole dance</p>
      </div>
    )
  }
}

export default MyResumeRight;