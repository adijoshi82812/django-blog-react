import React, { Component } from 'react';

import axios from 'axios';

import img from '../static_post_6.jpg';

class BlogRender extends Component {
    state = {
        blogData: []
    };

    componentDidMount() {
        const slug = window.location.href.slice(27);
        axios.get("http://localhost:8000/blogs/" + slug)
            .then(res => this.setState({ blogData: res.data }));
    }

    render() {
        const blogDataComponent = this.state.blogData.map(data => {
            return (
                <div className="w3-twothird w3-container">

                    <header>

                        <h1 className="w3-center">{data.title}</h1>

                        <img src={"http://localhost:8000" + data.image} alt={data.image_alt} className="w3-image" />

                    </header>

                    <p className="w3-justify">{data.content}</p>

                </div>
            );
        });

        return (
            <div className="w3-row w3-margin">

                {blogDataComponent}

                <div className="w3-third w3-container">

                    <div className="w3-padding">

                        <img src={img} alt="ad" className="w3-image w3-card" />

                    </div>

                    <div className="w3-margin w3-card w3-padding">

                        <p className="w3-large">Recent Posts</p>

                        <ul className="w3-ul w3-border-top w3-round w3-hover">

                            <li>
                                <a href={"/blog/first-post"} className="w3-button w3-hover-white">First Post</a>
                            </li>

                        </ul>

                    </div>

                </div>

            </div>
        );
    }
}

export default BlogRender;