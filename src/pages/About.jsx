import React from "react";
import NavBar from "../components/Navbar";

export const About = () => {
  return (
    <div className="About">
      <NavBar></NavBar>
      <div className="Content">
        <h2>things i like</h2>
        <p>
          <ul>
            <li>
              dance—previously choreographed and danced with{" "}
              <a href="https://www.youtube.com/@RhythmicBlueAtYale/featured">
                Rhythmic Blue
              </a>
            </li>
            <li>engine building board games</li>
            <li>
              reading—recent favorites include <i>Empire of Pain</i> by Patrick
              Radden Keefe, <i>An Immense World</i> by Ed Yong, and{" "}
              <i>My Brilliant Friend</i> by Elena Ferrante
            </li>
            <li>matcha and hojicha</li>
            <li>frolicking in nature</li>
            <li>
              ceramics, i&apos;m tending to my small army of handmade duck cups
            </li>
            <li>0.4mm pens</li>
            <li>
              trains—especially the Copenhagen metro, Swiss federal railways,
              and the northeast regional Amtrak
            </li>
            <li>em-dashes</li>
          </ul>
        </p>
      </div>
    </div>
  );
};
