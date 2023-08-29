import React, { Component } from "react";
import Contact from "./Contact";

class About extends Component {
    render() {
        return (
        <div className="about-me">
            {/* <img src="headshot.jpeg" alt="me" className="headshot" /> */}
            <h1 className="author"> Sarah Wang </h1>
            <div className="desc">
            Hi there!

            I'm a senior at Yale studying Computer Science and Chinese.
            </div>
            <div style={{ marginTop: "15px" }}>
            </div>
            <Contact />
        </div>
        );
    }
}

export default About;
