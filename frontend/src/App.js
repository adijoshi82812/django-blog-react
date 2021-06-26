import React, { Component } from 'react';

import { Route } from 'react-router-dom';

import Nav from './components/Nav';
import Footer from './components/Footer';
import BlogRender from './components/BlogRender';

import loading from './loading.gif';

import axios from 'axios';

class App extends Component {
  state = {
    loading: true,
    linksData: [],
  };

  setLoading = () => {
    this.setState({ loading: false });
  };

  componentDidMount() {
    axios.get('http://localhost:8000/blogs/')
      .then(res => this.setState({ linksData: res.data }));

    setTimeout(this.setLoading, Math.floor(Math.random() * 1500 - 1000) + 1000);
  }

  render() {
    const links = this.state.linksData.map(data => {
      return (
        <Route exact path={"/blog/" + data.slug}>
          <BlogRender />
        </Route>
      );
    });

    if (this.state.loading) {
      return (
        <div className="w3-display-container" style={{ height: "100vh", width: "100vw" }}>

          <div className="w3-display-middle">

            <img src={loading} alt="Loading" />
            <br />
            Loading...

          </div>
        </div>
      );
    }

    return (
      <div>
        <Nav links={links}/>
        <Footer />
      </div>
    );
  }
}

export default App;