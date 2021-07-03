import React from 'react';

import { useRouteMatch, Link, Switch, Route } from 'react-router-dom';

export default function Page() {
    let { path } = useRouteMatch();

    const pageComponent = (
        <div className="w3-display-container" style={{ width: "100vw", height: "100vh" }}>

            <div className="w3-display-middle w3-center">

                <p className="w3-xlarge">Oops, Something went Wrong</p>

                <p className="w3-large">Try this useful links</p>

                <Link to={"/"} className="w3-margin w3-button color-1 color-1-hover w3-round">Home</Link>

                <Link to={"/blog/"} className="w3-margin w3-button color-1 color-1-hover w3-round">Blog</Link>

            </div>

        </div>
    );

    return (
        <Switch>

            <Route path={path}>{pageComponent}</Route>

        </Switch>
    );
}