import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTelegram,
    faGithub,
    faLinkedin,
    faInstagram
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <div className="w3-black">

            <div className="w3-row w3-padding-large">

                <div className="w3-third w3-padding">

                    <h3>Title</h3>

                    <a href={"/blog"} style={{ textDecoration: "none" }}>Blog</a>

                </div>

                <div className="w3-third w3-padding">

                    <h3>Contact</h3>

                    <a href={"/contact"} style={{ textDecoration: "none" }}>Contact Me</a>

                    <div>

                        <p className="w3-small">Socials</p>

                        <FontAwesomeIcon icon={faInstagram} size="2x" className="w3-margin" />

                        <FontAwesomeIcon icon={faTelegram} size="2x" className="w3-margin" />

                        <FontAwesomeIcon icon={faGithub} size="2x" className="w3-margin" />

                        <FontAwesomeIcon icon={faLinkedin} size="2x" className="w3-margin" />

                    </div>
                </div>

                <div className="w3-third w3-padding">

                    <h3>About</h3>

                    <a href={"/about"} style={{ textDecoration: "none" }}>About Me</a>

                    <span onClick={() => alert("Coming Soon")} className="w3-block" style={{ cursor: "pointer" }}>Portfolio</span>

                </div>

            </div>

        </div>
    );
};