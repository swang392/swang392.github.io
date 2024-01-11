import React from "react";
// import styled from "styled-components";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Github } from "../assets/github.svg";
import { ReactComponent as LinkedIn } from "../assets/linkedin.svg";
import { ReactComponent as Gmail } from "../assets/gmail.svg";

const NavBar = () => {
  return (
    <>
      <div className="navpanel">
        <div className="navbar">
          <div className="navitem">
            <Link to="/">sarah</Link>
          </div>
          <div className="navitem">
            <Link to="/work">work</Link>
          </div>
          <div className="navitem">
            <Link to="/about">about</Link>
          </div>
          <div class="icon-row">
            <a
              href="mailto: sarah.wang@yale.edu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Gmail className="icon" />
            </a>

            <a href="https://www.github.com/swang392">
              <Github className="icon" />
            </a>
            <a href="https://www.linkedin.com/in/sarahlywang">
              <LinkedIn className="icon" />
            </a>
          </div>
        </div>

        <Outlet />
      </div>
    </>
  );
};
export default NavBar;
