import React, { Component } from 'react';

import axios from 'axios';

import SweetAlert from 'react-bootstrap-sweetalert';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            cred: {
                first_name: "",
                last_name: "",
                email: "",
                message: ""
            },
            alert: null
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const credentials = this.state.cred;
        credentials[e.target.name] = e.target.value;
        this.setState({ cred: credentials });
    }

    alertModal = () => {
        return <SweetAlert success onConfirm={this.hideAlert} title="Congratulations">Message has been sent</SweetAlert>;
    };

    alertSet = () => {
        this.setState({ alert: this.alertModal() });
    };

    hideAlert = () => {
        this.setState({
            cred: {
                first_name: "",
                last_name: "",
                email: "",
                message: ""
            },
            alert: null
        });
    };

    sendMessage = (cred) => {
        if (!cred.first_name.length)
            return alert("First name can't be empty");

        if (!cred.last_name.length)
            return alert("Last name can't be empty");

        if (!cred.email.length)
            return alert("Email can't be empty");

        if (!cred.message.length)
            return alert("Message can't be empty");

        axios.post("http://localhost:8000/api/contact-page/", cred)
            .then(() => {
                this.alertSet();
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="w3-animate-opacity">

                <header className="color-2 w3-display-container contact" style={{ width: "100%", height: "500px" }}>

                    <h1 className="w3-display-middle heading">
                        Contact Page
                        <hr className="color-3 color-3-border w3-padding-small" />
                    </h1>

                </header>

                <div className="w3-row color-3">

                    <h2 className="w3-center">Contact Form</h2>

                    <div className="w3-third w3-padding">

                        <input
                            type="text"
                            name="first_name"
                            value={this.state.cred.first_name}
                            placeholder="Enter your first name"
                            onChange={this.handleChange}
                            className="w3-input turn-10 w3-border w3-center"
                        />

                    </div>

                    <div className="w3-third w3-padding">

                        <input
                            type="text"
                            name="last_name"
                            value={this.state.cred.last_name}
                            placeholder="Enter your last name"
                            onChange={this.handleChange}
                            className="w3-input turn-10 w3-border w3-center"
                        />

                    </div>

                    <div className="w3-third w3-padding">

                        <input
                            type="email"
                            name="email"
                            value={this.state.cred.email}
                            placeholder="Enter your email address"
                            onChange={this.handleChange}
                            className="w3-input turn-10 w3-border w3-center"
                        />

                    </div>

                    <div className="w3-margin">

                        <textarea
                            name="message"
                            value={this.state.cred.message}
                            placeholder="Enter a message"
                            onChange={this.handleChange}
                            className="w3-input turn-10 w3-border w3-padding-24 w3-center w3-margin-bottom"
                            style={{ resize: "none" }}
                        />

                        <button
                            type="button"
                            onClick={() => this.sendMessage(this.state.cred)}
                            className="w3-large w3-button color-1 turn-10 w3-right w3-padding-large color-1-hover"
                        >

                            <FontAwesomeIcon icon={faPaperPlane} size="1x" />
                            &nbsp;
                            Send Message

                        </button>

                        <br />

                        <br />

                    </div>

                    {this.state.alert}

                </div>

            </div>
        );
    }
}

export default Contact;