import React, { Component } from 'react';

import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

class Nav extends Component {
    state = {
        navShow: false
    };

    handleNavShow = () => {
        if(this.state.navShow)
            this.setState({ navShow: false });
        else
            this.setState({ navShow: true });
    };

    render() {
        const showClassName = "w3-bar-block w3-padding-small w3-black w3-hide-large w3-hide-medium";
        const hideClassName = "w3-hide";

        return (
            <Router>

                <nav className="w3-bar w3-black w3-padding-small">

                    <Link to={"/"} className="w3-bar-item w3-button w3-hover-black">Home</Link>

                    <div className="w3-hide-small">

                        <Link to={"/about"} className="w3-bar-item w3-button w3-hover-black w3-right">About</Link>

                        <Link to={"/contact"} className="w3-bar-item w3-button w3-hover-black w3-right">Contact</Link>

                        <Link to={"/blog"} className="w3-bar-item w3-button w3-hover-black w3-right">Blog</Link>

                    </div>

                    <button type="button" className="w3-bar-item w3-button w3-hover-black w3-right w3-hide-large w3-hide-medium" onClick={this.handleNavShow}>
                        <FontAwesomeIcon icon={faBars} size="1x" />
                    </button>

                </nav>

                <div className={this.state.navShow ? showClassName : hideClassName}>

                    <Link to={"/blog"} className="w3-bar-item w3-button w3-hover-black" onClick={this.handleNavShow}>Blog</Link>

                    <Link to={"/contact"} className="w3-bar-item w3-button w3-hover-black" onClick={this.handleNavShow}>Contact</Link>

                    <Link to={"/about"} className="w3-bar-item w3-button w3-hover-black" onClick={this.handleNavShow}>About</Link>

                </div>

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