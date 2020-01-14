import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, CardMenu, Button, IconButton} from 'react-mdl' ;

class Portfolio extends Component {
  constructor(props){
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories(){
    if(this.state.activeTab === 0){
      return (
        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
          <CardTitle style={{
            color: '#fff', height: '176px',
            background: 'url(https://create-react-app.dev/img/logo-og.png) center / cover'
          }}>
            React for Fun
          </CardTitle>
          <CardText>
            Project made when learning React. Contains some easy pages, games and calculator.
          </CardText>
          <CardActions border>
            <Button colored><a href="https://github.com/kamilabartnik/react_fun">GitHub</a></Button>
            <Button colored><a href="https://kamilabartnik.github.io/react_fun/">GitHub Pages</a></Button>
          </CardActions>
          <CardMenu style={{ color: '#fff' }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      )
    } else if(this.state.activeTab === 1){
      return(
        <div><h1>This is VueJS</h1></div>
      )
    } else if(this.state.activeTab === 2){
      return(
        <div><h1>This is HTML/CSS with VanillaJS</h1></div>
      )
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
          <Tab>React</Tab>
          <Tab>VueJS</Tab>
          <Tab>HTML/CSS</Tab>
        </Tabs>

        <section className="projects-grid">
          <Grid className="projects-grid">
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
          
        </section>
      </div>
    )
  }
}

export default Portfolio;