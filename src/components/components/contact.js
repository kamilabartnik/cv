import React, { Component } from 'react';
import PenguinWave from '../PenguinWave';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import '../../css/components/contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>

            <h2> Kamila Bartnik </h2>
            <img src="https://github.com/kamilabartnik/cv/blob/master/src/assets/KamilaBartnik.jpg?raw=true"
              alt="avatar"
               />
            <p style={{ width: '70%', margin: 'auto', paddingTop: '1em' }}>
              After almost 7 years of making my own business I wanna help you with yours ;)
              </p>
          </Cell>
          <Cell col={6}>
            <h2> Contact Me </h2>
            {/* <hr /> */}

            <div className="contact-list">
              <List>           
                <ListItem>
                  <ListItemContent className="contact-list__list-item" icon="place">Poznań</ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent className="contact-list__list-item" icon="phone">505 998 053</ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent className="contact-list__list-item" icon="mail">kbartnik@g.pl</ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent className="contact-list__list-item" icon="linkedin"><a href="https://www.linkedin.com/in/kamila-bartnik-01667a18/" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color: 'black'}}>LinkedIn</a> </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
        <PenguinWave />
      </div>
    )
  }
}

export default Contact;