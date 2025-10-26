import React from "react";
import NavBar from "../components/Navbar";
import ProfileImg from "../assets/profile.JPG";

export const Home = () => {
  return (
    <div className="Home">
      <NavBar></NavBar>
      <img className="pfp" src={ProfileImg} alt="it is me" />
      <div className="Home-Content">
        <h1>
          <b>sarah wang</b>
        </h1>
        <h2>hello,</h2>
        <p>
          thanks for stopping by! i like to work on open-source and
          infrastructure software, solve puzzles, and build things. You'll
          usually find me in a studio, listening to an audiobook, or wandering
          outside. I studied Computer Science and Chinese at Yale, but also love
          neuroscience and creative writing.
        </p>
      </div>
    </div>
  );
};
