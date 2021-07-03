import React, { useEffect, useState } from 'react';

import axios from 'axios';

import { useRouteMatch, Route, Switch, Link } from 'react-router-dom';

import BlogRender from './BlogRender';
import Loading from './Loading';

function Blog() {
    let { path, url } = useRouteMatch();

    const [posts, setposts] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        async function fetchdata() {
            const res = await axios.get("http://localhost:8000/api/blog/");
            return res;
        }

        return fetchdata().then(res => setposts(res.data), setloading(false));
    }, []);

    const postsComponent = posts.map(data => {
        return (
            <div className="w3-third w3-padding" key={data.id}>

                <div className="w3-card-4 turn-10 color-4">

                    <Link to={`${url}` + data.slug + '/'} className="w3-hover-opacity" style={{ textDecoration: "none" }}>

                        <img src={data.image} alt={data.alt_text} className="w3-image turn-top-10" />

                        <h4 className="w3-center w3-padding heavy">{data.title}</h4>

                    </Link>

                </div>

            </div>

        );
    });

    const blog = (
        <div className="w3-animate-opacity">

            <header className="color-2 w3-display-container blog" style={{ width: "100%", height: "500px" }}>

                <h1 className="w3-display-middle heading">
                    Blog
                    <hr className="color-1 w3-padding-small color-1-border" />
                </h1>

            </header>

            <div className="w3-margin">

                <div className="w3-card-4 color-3 w3-padding turn-10">

                    <h3>All Posts</h3>

                    <div className="w3-row">{postsComponent}</div>

                </div>

            </div>

        </div>
    );

    return (
        <Switch>

            <Route exact path={path}>{loading ? <Loading /> : blog}</Route>

            <Route path={`${path}:slug/`}>
                <BlogRender />
            </Route>

        </Switch>
    );
}

export default Blog;