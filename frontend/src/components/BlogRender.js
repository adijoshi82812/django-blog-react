import React, { useEffect, useState } from 'react';

import { useRouteMatch, useParams, Link, Switch, Route } from 'react-router-dom';

import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

import Loading from './Loading';

function BlogRender() {
    let { slug } = useParams();

    let { path } = useRouteMatch();

    const [data, setdata] = useState([]);
    const [recent, setrecent] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        setloading(true);
        async function fetchdata() {
            const res = await axios.get("http://localhost:8000/api/blog/posts/" + slug)
            return res;
        }

        return fetchdata().then(res => setdata(res.data), setloading(false));
    }, [slug]);

    useEffect(() => {
        setloading(true);
        async function fetchData() {
            const res = await axios.get("http://localhost:8000/api/blog/recent-posts/");
            return res;
        }

        return fetchData().then(res => setrecent(res.data), setloading(false));
    }, []);

    const recentComponent = recent.map(data => {
        return (
            <li key={data.id}>

                <Link to={`/blog/` + data.slug + '/'} style={{ textDecoration: "none" }}>{data.title}</Link>

            </li>
        );
    });

    const blogComponent = data.map(data => {
        return (
            <div className="w3-threequarter w3-padding" key={data.id}>

                <header>

                    <h1 className="w3-center">{data.title}</h1>

                    <img src={data.image} alt={data.alt_text} className="w3-image turn-10" />

                </header>

                <h2 className="w3-padding">

                    <FontAwesomeIcon icon={faCaretRight} size="1x" className="w3-margin-right" />
                    {data.heading}

                </h2>

                <p className="w3-justify w3-padding color-3 turn-10">{data.content}</p>

            </div>
        );
    });

    const blogRenderComponent = (
        <div className="w3-row w3-margin w3-animate-opacity">

            {blogComponent}

            <div className="w3-quarter">

                <div className="w3-padding">

                    <img src="/media/ad.png" alt="Ad" className="w3-image turn-10" />

                </div>

                <div className="w3-padding">

                    <ul className="color-3 w3-ul turn-10">

                        <li className="w3-large bold">Recent Posts</li>

                        {recentComponent}

                    </ul>

                </div>

            </div>

        </div>
    );

    return (
        <Switch>

            <Route exact path={path}>{loading ? <Loading /> : blogRenderComponent}</Route>

        </Switch>
    );
}

export default BlogRender;