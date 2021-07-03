import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faCaretRight } from '@fortawesome/free-solid-svg-icons';

class Footer extends Component {
    render() {
        return (
            <footer className="color-1">

                <div className="w3-row">

                    <div className="w3-third w3-padding-large">

                        <h5>

                            <FontAwesomeIcon icon={faChevronRight} size="1x" />
                            &nbsp;
                            Joshi's Blog

                        </h5>

                        <p>

                            <FontAwesomeIcon icon={faCaretRight} size="1x" />
                            &nbsp;
                            Blog

                        </p>

                    </div>

                    <div className="w3-third w3-padding-large">

                        <h5>

                            <FontAwesomeIcon icon={faChevronRight} size="1x" />
                            &nbsp;
                            Contact

                        </h5>

                        <p>

                            <FontAwesomeIcon icon={faCaretRight} size="1x" />
                            &nbsp;
                            Email

                        </p>

                        <p>

                            <FontAwesomeIcon icon={faCaretRight} size="1x" />
                            &nbsp;
                            Facebook

                        </p>

                        <p>

                            <FontAwesomeIcon icon={faCaretRight} size="1x" />
                            &nbsp;
                            Instagram

                        </p>

                    </div>

                    <div className="w3-third w3-padding-large">

                        <h5>

                            <FontAwesomeIcon icon={faChevronRight} size="1x" />
                            &nbsp;
                            About

                        </h5>

                        <p>

                            <FontAwesomeIcon icon={faCaretRight} size="1x" />
                            &nbsp;
                            About me

                        </p>

                        <p>

                            <FontAwesomeIcon icon={faCaretRight} size="1x" />
                            &nbsp;
                            PortFolio

                        </p>

                    </div>

                </div>

                <div className="w3-padding">

                    <p>&copy; Joshi's Blog 2021</p>

                </div>

            </footer>
        );
    }
}

export default Footer;