import React from "react";
import "./Hero.scss";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <h1 className="hero-title-1920">
        Senior product designer helping company communicate with their audience
        in a&nbsp;meaningful&nbsp;way
      </h1>

      <h1 className="hero-title-1000">
        Senior&nbsp;product&nbsp;designer&nbsp;helping <br />
        company&nbsp;communicate <br />
        with&nbsp;their&nbsp;audience&nbsp;in <br />
        a&nbsp;meaningful&nbsp;way
      </h1>
    </section>
  );
};

export default Hero;
