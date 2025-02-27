import React from "react";
import "./AboutPage.scss";

function AboutPage() {
  const aboutMe = [
    {
      first: "Hello!",
      second:
        "My name is Andrei Mordovski. I am a senior product designer with over 10 years of experience in digital product development. I went from a freelancer to the lead of the design team. I have collaborated with companies such as Leroy Merlin, Sberbank, Yakitoria and others",
    },
    {
      first: "Experience",
      second:
        "I have extensive experience in creating design systems, e-commerce products, fintech, BI, b2b, Saas and others",
    },
    {
      first: "Focal point",
      second:
        "In my work, I focus on the goals and objectives of the business, the target audience, research and custdev, resource and technical constraints\nI am fond of frontend development and traveling",
    },
  ];

  return (
    <>
      <div className="photo">Photo</div>

      <section className="about">
        {aboutMe.map((item, index) => (
          <div className="container" key={index}>
            <p className="first">{item.first}</p>
            <div className="second">
              <p className="content">
                {item.second.split("\n").map((textChunk, i, arr) => (
                  <React.Fragment key={i}>
                    {textChunk}
                    {i < arr.length - 1 && (
                      <>
                        <br />
                        <br />
                      </>
                    )}
                  </React.Fragment>
                ))}
              </p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default AboutPage;
