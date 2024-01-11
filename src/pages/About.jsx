import React from "react";
import NavBar from "../components/Navbar";
// import Contact from "./Contact";

export const About = () => {
  return (
    <div className="About">
      <NavBar></NavBar>
      <div className="Content">
        <p>
          I&apos;m a student and problem-solver at heart. I enjoy trying new
          hobbies and having meaningful conversations. I&apos;m from Virginia
          and am currently located in New Haven.
          <br></br>
          <br></br>
        </p>
        <h3>
          <b>things i like</b>
        </h3>
        <p>
          <ul>
            <li>
              Dance—hip hop, street jazz, and house, especially! Currently
              choreographing and dancing with{" "}
              <a href="https://www.youtube.com/@RhythmicBlueAtYale/featured">
                Rhythmic Blue
              </a>
            </li>
            <li>
              Reading—recent favorites include <i>Empire of Pain</i> by Patrick
              Radden Keefe, <i>Before the Coffee Gets Cold</i> by Toshikazu
              Kawaguchi, and <i>Zoo Station</i> by Christiane F.
            </li>
            <li>Matcha</li>
            <li>Traveling</li>
            <li>Swimming and long walks</li>
            <li>
              <a href="https://www.instagram.com/yalebisqueandglaze/">
                Ceramics
              </a>
              —I&apos;m building a small army of duck cups and bowls
            </li>
            <li>The Northeast Regional Amtrak</li>
            <li>Em-dashes</li>
          </ul>
        </p>
      </div>
    </div>
  );
};

// class About extends Component {
//     render() {
//         return (
//         <div className="about-me">
//             <h1 className="author"> Sarah Wang </h1>
//             <div className="desc">
//             Hi, I'm Sarah.

//             I'm a senior at Yale studying Computer Science and Chinese.
//             </div>
//             <div style={{ marginTop: "15px" }}>
//             </div>
//             <Contact />
//         </div>
//         );
//     }
// }

// export default About;
