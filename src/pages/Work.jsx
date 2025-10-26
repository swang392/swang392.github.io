import React from "react";
import NavBar from "../components/Navbar";

export const Work = () => {
  return (
    <div className="Work">
      <NavBar></NavBar>
      <div className="Content">
        <h2>currently</h2>
        <p>
          software engineer at datadog -- automating agent management and
          sipping my afternoon hojicha
          <br></br>
          <br></br>
        </p>
        <h2>formerly</h2>
        <p>
          swe intern @ <a href="https://www.datadoghq.com/">datadog</a>
          <br></br>
          algorithms teaching assistant @{" "}
          <a href="https://cpsc.yale.edu/">yale computer science</a>
          <br></br>
          director @{" "}
          <a href="https://www.kesem.org/chapters/connecticut">
            camp kesem yale
          </a>
          <br></br>
          swe intern @ <a href="https://about.meta.com/">meta</a> (
          <a href="https://pytorch.org/">pytorch!</a>)<br></br>
          sustainability and consumers analyst @{" "}
          <a href="https://www.yalesig.org/">ysig</a>
          <br></br>
          discovery fellow @ <a href="https://www.deshaw.com/">d.e. shaw</a>
          <br></br>
          engineering intern @ <a href="https://about.meta.com/">meta</a>{" "}
          <br></br>
          full stack engineer @{" "}
          <a href="https://www.crunchbase.com/organization/flamingle">
            seed startup
          </a>
          <br></br>
        </p>
      </div>
    </div>
  );
};
