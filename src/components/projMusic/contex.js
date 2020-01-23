import React, { Component } from 'react';

const Context = React.createContext();

export class Provier extends Component {
  state = {
    track_list: [
      { track: { tack_name: 'sf'} },
      { track: { tack_name: 'sf'} },
    ],
    heading: 'Top 10 tracks'
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;