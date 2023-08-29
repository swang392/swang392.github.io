import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="social">
        <a
          href="https://www.linkedin.com/in/sarahlywang/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-linkedin" />
        </a>
        <a
          href="https://github.com/swang392"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-github" />
        </a>
        <a
          href="mailto:sarah.wang@yale.edu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-envelope" />
        </a>
      </div>
    );
  }
}

export default Contact;