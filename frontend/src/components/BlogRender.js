import React, { Component } from 'react';

import img from '../static_post_6.jpg';

class BlogRender extends Component {
    render() {
        return (
            <div className="w3-row w3-margin">

                <div className="w3-twothird w3-container">

                    <header>

                        <h1 className="w3-center">Static Post 6</h1>

                        <img src={img} alt="static_post_6" className="w3-image" />

                    </header>

                    <p className="w3-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac odio a ipsum convallis rhoncus. Donec arcu enim, hendrerit eu euismod ut, lacinia nec orci. Donec nec libero a orci elementum varius. Donec sagittis justo quis lacus tincidunt tincidunt vitae sollicitudin purus. Sed rhoncus commodo blandit. Nam tempor odio at rhoncus dignissim. Nunc finibus nisl magna. Quisque in orci mollis, volutpat velit nec, tincidunt arcu. Aliquam vitae sodales ligula, nec malesuada sapien. Aenean quam magna, malesuada sit amet ligula at, pretium viverra ante. Vestibulum id neque vel tortor aliquet bibendum. Integer condimentum lectus ac nibh egestas vehicula. Mauris dui ipsum, placerat vel est et, vulputate lacinia erat.

                        Maecenas at urna sapien. Aliquam lacinia mattis sollicitudin. Fusce malesuada libero pretium lectus tincidunt, sit amet placerat massa sagittis. Curabitur consequat tellus vel neque viverra, ac ornare elit vulputate. Sed sit amet ex sit amet turpis mollis iaculis vel a purus. Phasellus urna mi, pulvinar a porta id, congue ac diam. Aliquam eget mauris et nisi porta ullamcorper. Sed maximus rhoncus nisi, convallis consectetur dolor scelerisque in. Proin euismod, turpis eu placerat viverra, odio nibh pharetra diam, a varius orci est ac lacus. Aenean a ornare elit. Nulla facilisi.

                        Donec justo leo, aliquet in consectetur sit amet, euismod ac ante. Mauris eu faucibus est. Sed ac sem lobortis, congue risus quis, euismod dolor. Pellentesque facilisis lobortis magna, pellentesque finibus orci finibus non. Nam quis bibendum felis, ac porta lectus. Proin vitae magna quis mi convallis dapibus id in nisi. In rhoncus rutrum tellus vitae molestie. Etiam ut interdum quam. Curabitur molestie quam dolor, vel venenatis dolor efficitur sed.

                        Etiam id pulvinar eros, id bibendum est. Vestibulum consectetur pretium justo quis dapibus. Aenean vitae nisi urna. Sed ultrices tincidunt dignissim. Duis gravida diam id vulputate scelerisque. Integer ipsum mi, imperdiet sed leo in, ullamcorper pharetra lorem. Maecenas quis luctus ante. Nam pharetra viverra lorem in sagittis. Cras luctus ex orci, quis pulvinar justo scelerisque non. Aenean urna leo, fermentum eu turpis non, imperdiet commodo justo.

                        In in placerat enim. Cras sapien diam, finibus quis est ac, iaculis laoreet velit. Sed quis odio libero. Suspendisse id ante nunc. Vivamus ultrices, ipsum ut gravida auctor, purus neque commodo mauris, eu fringilla justo ante in lorem. Nam urna nunc, laoreet vitae imperdiet vel, pharetra et neque. Maecenas accumsan pulvinar sollicitudin. Curabitur laoreet congue eros et dictum. Vestibulum faucibus ligula et felis semper ultrices.
                    </p>

                </div>

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