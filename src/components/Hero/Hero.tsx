import React from "react";
import "./Hero.scss";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1>
          Senior&nbsp;product&nbsp;designer helping company communicate
          with their audience in a&nbsp;meaningful&nbsp;way
        </h1>
      </div>

      <div className="container-mobile">
        <h1>
          Senior&nbsp;product&nbsp;designer helping company communicate with
          their audience in a&nbsp;meaningful&nbsp;way
        </h1>
      </div>
    </section>
  );
};

export default Hero;
