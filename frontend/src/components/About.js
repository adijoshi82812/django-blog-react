import React, { Component } from 'react';

class About extends Component {
    state = {
        tab1show: false,
        tab2show: false
    };

    render() {
        const tab1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec odio laoreet, ultricies massa nec, faucibus neque. Cras ac fringilla ligula. Sed tempus enim nisi, non lacinia massa dapibus a. Donec sed leo ultricies, consectetur libero et, sodales nisi. Aenean venenatis leo sit amet viverra tempor. Morbi nulla quam, scelerisque id elit ac, blandit pharetra eros. Fusce faucibus malesuada quam blandit lobortis. Nullam tempor iaculis turpis, non convallis purus aliquam vitae. Nullam vitae metus mi. Cras vel justo hendrerit, mollis augue ac, elementum ante. Mauris placerat sem eleifend est hendrerit porta. Sed ut ante in lectus rutrum semper sit amet a dui.";
        const tab2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec odio laoreet, ultricies massa nec, faucibus neque. Cras ac fringilla ligula. Sed tempus enim nisi, non lacinia massa dapibus a. Donec sed leo ultricies, consectetur libero et, sodales nisi. Aenean venenatis leo sit amet viverra tempor. Morbi nulla quam, scelerisque id elit ac, blandit pharetra eros. Fusce faucibus malesuada quam blandit lobortis. Nullam tempor iaculis turpis, non convallis purus aliquam vitae. Nullam vitae metus mi. Cras vel justo hendrerit, mollis augue ac, elementum ante. Mauris placerat sem eleifend est hendrerit porta. Sed ut ante in lectus rutrum semper sit amet a dui. Nunc sodales lacus tellus, quis dapibus dolor suscipit vitae. Integer interdum velit in magna efficitur, non sollicitudin ex interdum. Integer augue nisi, accumsan sed porta eu, vestibulum at leo. Fusce tristique iaculis nibh, ac tristique purus gravida volutpat. Vivamus eu ultricies metus, quis cursus ante. Nunc a dui rhoncus tortor vulputate fringilla ut non nulla. Vivamus ac sagittis lorem, in gravida urna.";

        const tab1small = tab1.slice(0, 500);
        const tab2small = tab2.slice(0, 500);

        return (
            <div className="w3-animate-opacity">

                <header className="color-2 w3-display-container" style={{ width: "100%", height: "500px" }}>

                    <h1 className="w3-display-middle heading">
                        About Page
                        <hr className="color-1 w3-padding-small color-1-border" />
                    </h1>

                </header>

                <div className="w3-row">

                    <div className="w3-half w3-padding">

                        <div className="w3-card-4 w3-padding color-3 turn-10">

                            <h2 className="w3-center">Hello World</h2>

                            <p className="w3-justify w3-hide-small">{tab1}</p>

                            <p className="w3-justify w3-hide-large w3-hide-medium">
                                {this.state.tab1show ? tab1 : tab1small}

                                {this.state.tab1show ? (

                                    <span
                                        onClick={() => { this.setState({ tab1show: false }) }}
                                        className="text-color-1 clickable"
                                        style={{ textDecoration: "underline" }}
                                    >
                                        Read Less...
                                    </span>

                                ) : (

                                    <span
                                        onClick={() => { this.setState({ tab1show: true }) }}
                                        className="text-color-1 clickable"
                                        style={{ textDecoration: "underline" }}
                                    >
                                        Read More...
                                    </span>

                                )}
                            </p>

                        </div>

                    </div>

                    <div className="w3-half w3-padding">

                        <div className="w3-card-4 w3-padding color-3 turn-10">

                            <h2 className="w3-center">Hello World</h2>

                            <p className="w3-justify w3-hide-small">{tab2}</p>

                            <p className="w3-justify w3-hide-large w3-hide-medium">
                                {this.state.tab2show ? tab2 : tab2small}

                                {this.state.tab2show ? (

                                    <span
                                        onClick={() => { this.setState({ tab2show: false }) }}
                                        className="text-color-1 clickable"
                                        style={{ textDecoration: "underline" }}
                                    >
                                        Read Less...
                                    </span>

                                ) : (

                                    <span
                                        onClick={() => { this.setState({ tab2show: true }) }}
                                        className="text-color-1 clickable"
                                        style={{ textDecoration: "underline" }}
                                    >
                                        Read More...
                                    </span>

                                )}
                            </p>

                        </div>

                    </div>

                </div>

            </div>
        );
    }
}

export default About;