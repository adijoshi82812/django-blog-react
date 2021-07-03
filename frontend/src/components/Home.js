import React, { useEffect, useState } from 'react';

import { useRouteMatch, Switch, Link, Route } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

import Loading from './Loading';

import axios from 'axios';

function Home() {
    let { path } = useRouteMatch();

    const [Quote, setQuote] = useState([]);
    const [loading, setloading] = useState(true);
    const [showMore, setshowMore] = useState(false);
    const [recentTab, setrecentTab] = useState([]);

    const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec odio laoreet, ultricies massa nec, faucibus neque. Cras ac fringilla ligula. Sed tempus enim nisi, non lacinia massa dapibus a. Donec sed leo ultricies, consectetur libero et, sodales nisi. Aenean venenatis leo sit amet viverra tempor. Morbi nulla quam, scelerisque id elit ac, blandit pharetra eros. Fusce faucibus malesuada quam blandit lobortis. Nullam tempor iaculis turpis, non convallis purus aliquam vitae. Nullam vitae metus mi. Cras vel justo hendrerit, mollis augue ac, elementum ante. Mauris placerat sem eleifend est hendrerit porta. Sed ut ante in lectus rutrum semper sit amet a dui. Nunc sodales lacus tellus, quis dapibus dolor suscipit vitae.Integer interdum velit in magna efficitur, non sollicitudin ex interdum.Integer augue nisi, accumsan sed porta eu, vestibulum at leo.Fusce tristique iaculis nibh, ac tristique purus gravida volutpat.Vivamus eu ultricies metus, quis cursus ante.Nunc a dui rhoncus tortor vulputate fringilla ut non nulla.Vivamus ac sagittis lorem, in gravida urna. Aenean aliquet, sem eleifend laoreet pharetra, enim orci molestie eros, eget dapibus urna massa nec tortor.Duis dolor libero, posuere non molestie finibus, vehicula in justo.Morbi sed ex neque.Praesent sed lectus ullamcorper, gravida mi et, placerat ante.Sed cursus libero quis erat aliquam viverra.Nunc cursus laoreet dictum.Cras at tristique sem.Curabitur in tempor elit.Vivamus a sapien a nunc ultricies fermentum ac vel eros.Praesent consectetur a justo vitae ornare.In faucibus convallis odio sed mattis.Nulla commodo ullamcorper quam in aliquet.Phasellus facilisis quam quis odio pharetra vestibulum.Nullam vel sapien posuere, finibus nulla eu, ultricies sem.Vivamus gravida est lacus.Donec tortor risus, commodo in consectetur non, feugiat quis turpis. Duis condimentum nulla non mi blandit, quis auctor metus feugiat.Duis sit amet iaculis felis.Phasellus urna mauris, efficitur sit amet risus ut, suscipit placerat enim.Morbi dolor mi, hendrerit a nibh vitae, viverra hendrerit dolor.Donec et pretium tellus, id pretium libero.Nunc commodo pharetra est, non maximus nisi aliquam et.Phasellus consectetur turpis quis augue egestas dapibus.Duis sit amet laoreet diam.Integer vehicula facilisis libero eu pulvinar.Nam ultricies ornare venenatis.Nulla faucibus id mi eu porttitor.Praesent molestie lacus eros, in laoreet augue auctor et.Phasellus ullamcorper urna in pretium viverra.Fusce vitae nunc non libero lacinia pulvinar.Donec quam neque, iaculis vitae fringilla vitae, eleifend ut neque.Morbi tincidunt varius risus, eu dignissim nibh sagittis et. Curabitur vel turpis sem.Praesent id justo nisi.Proin quis arcu auctor, condimentum felis a, gravida nisl.Phasellus sem eros, tincidunt vitae felis sit amet, ultricies consequat est.Aenean porttitor condimentum aliquet.Suspendisse id condimentum elit, sed molestie tortor.Vestibulum nec volutpat neque, nec mollis purus.Aenean ultricies maximus fringilla. ";

    const descriptionsmall = description.slice(0, 500);

    useEffect(() => {
        async function fetchData() {
            const res = await axios.get("http://localhost:8000/api/fetch-quote/");
            return res;
        }

        return fetchData().then(res => setQuote(res.data), setloading(false));
    }, []);

    useEffect(() => {
        async function fetchData() {
            const res = await axios.get("http://localhost:8000/api/blog/recent-posts/");
            return res;
        }

        return fetchData().then(res => setrecentTab(res.data));
    }, []);

    const recentComponent = recentTab.map(data => {
        return (
            <div className="w3-third w3-padding" key={data.id}>

                <div className="w3-card-4 turn-10 color-4">

                    <Link to={`/blog/` + data.slug + '/'} style={{ textDecoration: "none" }} className="w3-hover-opacity">

                        <img src={data.image} alt={data.alt_text} className="w3-image turn-top-10" />

                        <h4 className="w3-center w3-padding heavy">{data.title}</h4>

                    </Link>

                </div>

            </div>
        );
    });

    const quoteComponent = Quote.map(data => {
        return (
            <div className="w3-margin" key={data.id}>

                <div className="w3-card-4 w3-padding-64 color-1 w3-center turn-10">

                    <FontAwesomeIcon icon={faQuoteLeft} size="1x" />

                    <p>{data.quote}</p>

                    <p>{data.author}</p>

                </div>

            </div>
        );
    });

    const homeComponent = (
        <div className="w3-animate-opacity">

            <header className="color-2 w3-display-container home" style={{ width: "100%", height: "500px" }}>

                <h1 className="w3-display-middle heading">

                    Joshi's Blog
                    <hr className="color-1 w3-padding-small color-1-border" />

                </h1>

            </header>

            <div className="w3-margin">

                <div className="w3-card-4 color-3 w3-padding turn-10">

                    <h2 className="w3-center">Lorem Ipsum</h2>

                    <p className="w3-hide-small">{description}</p>

                    <p className="w3-justify w3-hide-large w3-hide-medium">
                        {showMore ? description : descriptionsmall}

                        {showMore ? (

                            <span
                                onClick={() => { setshowMore(false) }}
                                className="text-color-1 clickable"
                                style={{ textDecoration: "underline" }}
                            >
                                Read Less...
                            </span>

                        ) : (

                            <span
                                onClick={() => { setshowMore(true) }}
                                className="text-color-1 clickable"
                                style={{ textDecoration: "underline" }}
                            >
                                Read More...
                            </span>

                        )}
                    </p>

                </div>

            </div>

            {quoteComponent}

            <div className="w3-margin">

                <div className="w3-card-4 color-3 w3-padding turn-10">

                    <h3>Recent Posts</h3>

                    <div className="w3-row">

                        {recentComponent}

                    </div>

                </div>

            </div>

        </div>
    );

    return (
        <Switch>

            <Route exact path={path}>{loading ? <Loading /> : homeComponent}</Route>

        </Switch>
    );
}

export default Home;