import React, { Component } from 'react';
import Counter from '../components/Counter'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="App-header">
          <Counter />
          <h1 className="text-center">HH Map</h1>
        </header>
        <div>
          Hello World
        </div>
      </div>
    );
  }
}
