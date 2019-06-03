import React, { Component } from "react";
import axios from "axios";

import "./contact.css";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      message: "",
      email: ""
    };
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log("e.target.value: ", e.target.value);
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, message, email } = this.state;
    axios.post(`/api/email`, { name, message, email });
  };

  render() {
    return (
      <div className="contact-page">
        <div className="background-container" />

        <div className="box-b">
          <span />
          <span />
          <span />
          <span />
          <div className="content-b">
            <h1>Let's Connect</h1>
            <div className="contact-content">
              <div className="Message-form" onSubmit={this.handleSubmit}>
                <h3>David Hernandez</h3>
                <br />
                <h3>(813) 409-0403</h3>
                <br />
                <h4>djhernandez@rocketmail.com</h4>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
