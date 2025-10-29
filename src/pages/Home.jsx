import React from "react";
import NavBar from "../components/Navbar";
import ProfileImg from "../assets/profile.JPG";

export const Home = () => {
  return (
    <div className="Home">
      <NavBar></NavBar>
      <img className="pfp" src={ProfileImg} alt="it is me" />
      <div className="Home-Content">
        <h2>hello! i&apos;m</h2>
        <h1>
          <b>sarah wang.</b>
        </h1>
        <p>
          I like to work on open-source and infrastructure software, solve
          puzzles, and build things. I&apos;m a senior at Yale studying Computer
          Science and Chinese (mostly), but I also love neuroscience and
          creative writing.
        </p>
      </div>
    </div>
  );
};
