import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            message: ""
        };
    }

    render() {
        return (
            <div className="w3-animate-opacity">

                <header className="w3-display-container w3-grey" style={{ height: "500px", width: "100%" }}>

                    <h1 className="w3-display-middle w3-text-white bold">
                        Contact Page
                        <hr className="w3-black w3-padding-small w3-border-black" />
                    </h1>

                </header>

                <div className="w3-container w3-padding">

                    <div className="w3-padding">

                        <h2 className="w3-center w3-margin">Contact Form</h2>

                        <form>

                            <div className="w3-row">

                                <div className="w3-third w3-padding">

                                    <input
                                        type="text"
                                        name="first_name"
                                        value={this.state.first_name}
                                        placeholder="Enter your first name"
                                        className="w3-input w3-border w3-round"
                                    />

                                </div>

                                <div className="w3-third w3-padding">

                                    <input
                                        type="text"
                                        name="first_name"
                                        value={this.state.first_name}
                                        placeholder="Enter your first name"
                                        className="w3-input w3-border w3-round"
                                    />

                                </div>

                                <div className="w3-third w3-padding">

                                    <input
                                        type="text"
                                        name="first_name"
                                        value={this.state.first_name}
                                        placeholder="Enter your first name"
                                        className="w3-input w3-border w3-round"
                                    />

                                </div>

                            </div>

                            <div className="w3-padding">

                                <textarea
                                    name="message"
                                    value={this.state.message}
                                    placeholder="Enter a message"
                                    className="w3-input w3-border w3-round w3-padding-24"
                                    style={{ resize: "none" }}
                                />

                            </div>

                            <div className="w3-padding">

                                <button type="button" className="w3-button w3-black w3-padding-large w3-round w3-right">
                                    Send Message
                                    <FontAwesomeIcon icon={faPaperPlane} size="1x" className="w3-margin-left"/>
                                </button>

                            </div>

                        </form>

                    </div>

                </div>

            </div>
        );
    }
}

export default Contact;