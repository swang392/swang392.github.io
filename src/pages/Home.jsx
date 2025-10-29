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
          i'm a software engineer, perpetual student, and curious observer.{" "}
        </p>
      </div>
    </div>
  );
};
