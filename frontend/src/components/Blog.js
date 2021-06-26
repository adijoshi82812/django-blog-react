import React, { Component } from 'react';

import img from '../static_post_6.jpg';

class Blog extends Component {
    render() {
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

                        <div className="w3-white w3-third w3-card turn-20">

                            <img src={img} alt="static_post_6" className="w3-image turn-top-20" />

                            <h3 className="w3-center">Static Post 6</h3>

                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

export default Blog;