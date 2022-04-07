import React, { Component, Fragment } from 'react';
import './App.css';

class App  extends Component {
  
  render() {
    const name = {
      firstName: "Jani",
      lastName: "Sollo"
  }

    return(

    <Fragment>
      <h1>Hello {name.firstName.toUpperCase()}</h1>
    </Fragment>


    )
  }
}

export default App;
