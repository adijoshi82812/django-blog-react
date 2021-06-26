import React, { Component } from 'react';

import Nav from './components/Nav';
import Footer from './components/Footer';

import loading from './loading.gif';

class App extends Component{
  state = {
    loading: true
  };

  setLoading = () => {
    this.setState({ loading: false });
  };

  componentDidMount(){
    setTimeout(this.setLoading, Math.floor(Math.random() * 1500 -1000) + 1000);
  }

  render(){
    if(this.state.loading){
      return(
        <div className="w3-display-container" style={{ height: "100vh", width: "100vw" }}>
          
          <div className="w3-display-middle">
            
            <img src={loading} alt="Loading"/>
            <br/>
            Loading...

          </div>
        </div>
      );
    }

    return(
      <div>
        <Nav/>
        <Footer/>
      </div>
    );
  }
}

export default App;