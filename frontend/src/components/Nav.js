import React, { Component } from 'react';

import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

class Nav extends Component{
    render(){
        return(
            <Router>

                <nav className="w3-bar w3-black w3-padding-small">

                    <Link to={"/"} className="w3-bar-item w3-button w3-hover-black">Home</Link>

                    <Link to={"/about"} className="w3-bar-item w3-button w3-hover-black w3-right">About</Link>

                    <Link to={"/contact"} className="w3-bar-item w3-button w3-hover-black w3-right">Contact</Link>

                    <Link to={"/blog"} className="w3-bar-item w3-button w3-hover-black w3-right">Blog</Link>

                </nav>

                <Switch>

                    <Route exact path={"/"}>Home</Route>

                    <Route exact path={"/blog"}>Blog</Route>

                    <Route exact path={"/contact"}>Contact</Route>

                    <Route exact path={"/about"}>About</Route>

                    <Route path={"/"}>404 Error Page</Route>
                
                </Switch>

            </Router>
        );
    }
}

export default Nav;