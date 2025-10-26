import React from "react";
import NavBar from "../components/Navbar";

export const About = () => {
  return (
    <div className="About">
      <NavBar></NavBar>
      <div className="Content">
        <h3>
          <b>things i like</b>
        </h3>
        <p>
          <ul>
            <li>
              dance—previously choreographed and danced with{" "}
              <a href="https://www.youtube.com/@RhythmicBlueAtYale/featured">
                Rhythmic Blue
              </a>
            </li>
            <li>frolicking in the mountains</li>
            <li>
              reading—recent favorites include <i>Empire of Pain</i> by Patrick
              Radden Keefe, <i>An Immense World</i> by Ed Yong, and{" "}
              <i>My Brilliant Friend</i> by Elena Ferrante
            </li>
            <li>matcha</li>
            <li>petting dogs, cats, cows, etc.</li>
            <li>morning jogs</li>
            <li>my small army of handmade ceramic duck cups</li>
            <li>
              trains—especially the northeast regional amtrak, swiss federal
              railways, and copenhagen metro{" "}
            </li>
            <li>em-dashes</li>
          </ul>
        </p>
      </div>
    </div>
  );
};
