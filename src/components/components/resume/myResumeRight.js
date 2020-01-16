import React, { Component } from 'react';


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
          <h2 style={{ paddingTop: '1em' }}>Kamila Bartnik</h2>
          <h4 style={{ color: 'grey' }}> Programmer </h4>
          <hr style={{ borderTop: '3px solid #833fb2', width: '70%' }} />
          <p>
            Mądre rzeczy o mnie
            </p>
          <hr style={{ borderTop: '3px solid #833fb2', width: '70%' }} />
          <h5>Adress</h5>
          <p>Poznań</p>
          <h5>Phone</h5>
          <p>505 998 053</p>
          <h5>Email</h5>
          <p>kbartnik@g.pl</p>
          <hr style={{ borderTop: '3px solid #833fb2', width: '70%' }} />
        </div>
    )
  }
}

export default MyResumeRight;