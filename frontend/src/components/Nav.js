import React, { Component } from 'react';

import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

class Nav extends Component{
    render(){
        return(
            <Router>

                <nav>

                    <Link to={"/"}>Home</Link>

                    <Link to={"/blog"}>Blog</Link>

                    <Link to={"/contact"}>Contact</Link>

                    <Link to={"/about"}>About</Link>

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