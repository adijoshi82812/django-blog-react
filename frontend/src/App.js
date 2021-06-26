import React, { Component } from 'react';

import Nav from './components/Nav';
import Footer from './components/Footer';

class App extends Component{
  render(){
    return(
      <div>
        <Nav/>
        <Footer/>
      </div>
    );
  }
}

export default App;