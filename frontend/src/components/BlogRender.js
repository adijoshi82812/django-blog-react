import React, { Component } from 'react';

import axios from 'axios';

import img from '../static_post_6.jpg';

class BlogRender extends Component {
    state = {
        blogData: [],
        recentPost: []
    };

    componentDidMount() {
        const slug = window.location.href.slice(27);
        axios.get("http://localhost:8000/blogs/" + slug)
            .then(res => this.setState({ blogData: res.data }));

        axios.get("http://localhost:8000/blogs/recent_posts/")
            .then(res => this.setState({ recentPost: res.data }));
    }

    render() {
        const blogDataComponent = this.state.blogData.map(data => {
            return (
                <div className="w3-twothird w3-container" key={data.id}>

                    <header>

                        <h1 className="w3-center">{data.title}</h1>

                        <img src={"http://localhost:8000" + data.image} alt={data.image_alt} className="w3-image" />

                    </header>

                    <p className="w3-justify">{data.content}</p>

                </div>
            );
        });

        const recentPostComponent = this.state.recentPost.map(data => {
            return (
                <li key={data.id}>
                    <a href={"/blog/" + data.slug} className="w3-button w3-hover-white">{data.title}</a>
                </li>
            );
        });

        return (
            <div className="w3-row w3-margin">

                {blogDataComponent}

                <div className="w3-third w3-container">

                    <div className="w3-padding">

                        <img src={"http://localhost:8000/media/static/fake_ad.jpg"} alt="ad image" className="w3-image w3-card" />

                    </div>

                    <div className="w3-margin w3-card w3-padding">

                        <p className="w3-large">Recent Posts</p>

                        <ul className="w3-ul w3-border-top w3-round w3-hover">

                            {recentPostComponent}

                        </ul>

                    </div>

                </div>

            </div>
        );
    }
}

export default BlogRender;