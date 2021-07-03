import React, { Component } from 'react';

import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import Blog from './Blog';
import Page from './404Page';

class Nav extends Component {
    state = {
        smallNav: false
    };

    smallNavHandler = () => {
        if (this.state.smallNav)
            this.setState({ smallNav: false });
        else
            this.setState({ smallNav: true });
    };

    render() {
        const showNavClassName = this.state.smallNav ? "w3-show" : "w3-hide";

        return (
            <Router>

                <nav className="w3-bar color-1 heavy">

                    <Link to={"/"} className="w3-bar-item w3-button color-1-hover">Home</Link>

                    <button
                        type="button"
                        onClick={this.smallNavHandler}
                        className="w3-bar-item w3-button w3-right w3-hide-large color-1-hover"
                    >

                        <FontAwesomeIcon icon={faBars} size="1x" />

                    </button>

                    <div className="w3-hide-small w3-hide-medium w3-right">

                        <Link to={"/blog/"} className="w3-bar-item w3-button color-1-hover">Blog</Link>

                        <Link to={"/contact/"} className="w3-bar-item w3-button color-1-hover">Contact</Link>

                        <Link to={"/about/"} className="w3-bar-item w3-button color-1-hover">About</Link>

                    </div>

                </nav>

                <div className={"w3-hide-large color-1 w3-bar-block w3-animate-opacity " + showNavClassName}>

                    <Link to={"/blog/"} onClick={this.smallNavHandler} className="w3-bar-item w3-button color-1-hover">
                        Blog
                    </Link>

                    <Link to={"/contact/"} onClick={this.smallNavHandler} className="w3-bar-item w3-button color-1-hover">
                        Contact
                    </Link>

                    <Link to={"/about/"} onClick={this.smallNavHandler} className="w3-bar-item w3-button color-1-hover">
                        About
                    </Link>

                </div>

                <Switch>

                    <Route exact path={"/"}>
                        <Home />
                    </Route>

                    <Route exact path={"/about/"}>
                        <About />
                    </Route>

                    <Route exact path={"/contact/"}>
                        <Contact />
                    </Route>

                    <Route path={"/blog/"}>
                        <Blog />
                    </Route>

                    <Route path={"/"}>
                        <Page />
                    </Route>

                </Switch>

            </Router>
        );
    }
}

export default Nav;