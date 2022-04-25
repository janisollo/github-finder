import React, { Component, Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar icon="fab fa-github" title="Github Finder" />
        <Users />
      </Fragment>
    );
  }
}

export default App;
