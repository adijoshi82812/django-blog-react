import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

import img from '../static_post_6.jpg';

import axios from 'axios';

class Home extends Component {
    state = {
        dailyQuoteData: [],
        daily_quote: {
            quote: "",
            author: ""
        },
        recentPost: []
    };

    componentDidMount() {
        axios.get("http://localhost:8000/daily_quotes/")
            .then(res => this.setState({ dailyQuoteData: res.data }))
            .then(() => this.setState({
                daily_quote: {
                    quote: this.state.dailyQuoteData[0].quote,
                    author: this.state.dailyQuoteData[0].author
                }
            }));

        axios.get("http://localhost:8000/blogs/recent_posts/")
            .then(res => this.setState({ recentPost: res.data }));
    }

    render() {
        const recentPostComponent = this.state.recentPost.map(data => {
            return (
                <div className="w3-row w3-padding" key={data.id}>

                    <a href={"/blog/" + data.slug} className="w3-white w3-third w3-card turn-20" style={{ textDecoration: "none" }}>

                        <img src={"http://localhost:8000" + data.image} alt={data.image_alt} className="w3-image turn-top-20" />

                        <h3 className="w3-center">{data.title}</h3>

                    </a>

                </div>
            );
        });

        return (
            <div className="w3-animate-opacity">

                <header className="w3-display-container w3-grey" style={{ height: "500px", width: "100%" }}>

                    <h1 className="w3-display-middle w3-text-white bold">
                        Website Title
                        <hr className="w3-black w3-padding-small w3-border-black" />
                    </h1>

                </header>

                <div className="w3-container w3-padding">

                    <div className="w3-card w3-round w3-padding">

                        <h2 className="w3-center w3-margin">Website description</h2>

                        <p className="w3-justify w3-text-grey">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac odio a ipsum convallis rhoncus. Donec arcu enim, hendrerit eu euismod ut, lacinia nec orci. Donec nec libero a orci elementum varius. Donec sagittis justo quis lacus tincidunt tincidunt vitae sollicitudin purus. Sed rhoncus commodo blandit. Nam tempor odio at rhoncus dignissim. Nunc finibus nisl magna. Quisque in orci mollis, volutpat velit nec, tincidunt arcu. Aliquam vitae sodales ligula, nec malesuada sapien. Aenean quam magna, malesuada sit amet ligula at, pretium viverra ante. Vestibulum id neque vel tortor aliquet bibendum. Integer condimentum lectus ac nibh egestas vehicula. Mauris dui ipsum, placerat vel est et, vulputate lacinia erat.

                            Maecenas at urna sapien. Aliquam lacinia mattis sollicitudin. Fusce malesuada libero pretium lectus tincidunt, sit amet placerat massa sagittis. Curabitur consequat tellus vel neque viverra, ac ornare elit vulputate. Sed sit amet ex sit amet turpis mollis iaculis vel a purus. Phasellus urna mi, pulvinar a porta id, congue ac diam. Aliquam eget mauris et nisi porta ullamcorper. Sed maximus rhoncus nisi, convallis consectetur dolor scelerisque in. Proin euismod, turpis eu placerat viverra, odio nibh pharetra diam, a varius orci est ac lacus. Aenean a ornare elit. Nulla facilisi.
                        </p>

                    </div>

                </div>

                <div className="w3-padding-64">

                    <div className="w3-center w3-text-grey">

                        <FontAwesomeIcon icon={faQuoteLeft} size="1x" />

                        <p>{this.state.daily_quote.quote}</p>

                        <p className="w3-small">{this.state.daily_quote.author}</p>

                    </div>

                </div>

                <div className="w3-conatiner w3-padding-large w3-light-grey">

                    <h2>Recent Posts</h2>

                    {recentPostComponent}

                </div>

            </div>
        );
    }
}

export default Home;