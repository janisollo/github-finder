import React, { Component, Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar icon="fab fa-github" title="Github Finder" />
      </Fragment>
    );
  }
}

export default App;
