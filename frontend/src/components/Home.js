import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

import img from '../static_post_6.jpg';

class Home extends Component {
    render() {
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

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                        <p className="w3-small">- Lorem</p>

                    </div>

                </div>

                <div className="w3-conatiner w3-padding-large w3-light-grey">

                    <h2>Recent Posts</h2>

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

export default Home;