import React, { Component } from 'react';

import axios from 'axios';

class Blog extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios.get("http://localhost:8000/blogs/")
            .then(res => this.setState({ posts: res.data }));
    }

    render() {
        const postsComponent = this.state.posts.map(data => {
            return (
                <div className="w3-padding w3-third" key={data.id}>

                    <div className="w3-white turn-20">

                        <a
                            href={"/blog/" + data.slug}
                            className="w3-card turn-20"
                            style={{ textDecoration: "none" }}
                        >

                            <img src={"http://localhost:8000" + data.image} alt={data.image_alt} className="w3-image turn-top-20" />

                            <p className="w3-center bold w3-padding">{data.title}</p>

                        </a>

                    </div>

                </div>
            );
        });

        return (
            <div className="w3-animate-opacity">

                <header className="w3-display-container w3-grey" style={{ height: "500px", width: "100%" }}>

                    <h1 className="w3-display-middle w3-text-white bold">
                        Blog Page
                        <hr className="w3-black w3-padding-small w3-border-black" />
                    </h1>

                </header>

                <div className="w3-conatiner w3-padding-large w3-light-grey">

                    <h2>All posts</h2>

                    <div className="w3-row w3-padding">

                        {postsComponent}

                    </div>
                </div>

            </div>
        );
    }
}

export default Blog;