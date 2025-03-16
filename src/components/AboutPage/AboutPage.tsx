import { Link } from "react-router-dom";
import goToProjectIcon from "../../assets/icons/goToProjectIcon.svg";
import "./AboutPage.scss";
import { useTranslation } from "react-i18next";

function AboutPage() {

  const {t} = useTranslation()

  return (
    <>
      <div className="photo">Photo</div>

      <section className="white-section">
        <div className="container">
          <p className="first">Hello!</p>
          <div className="second">
            <p className="content">
              {t("hello1")}
              <br />
              {t("hello2")}
              {/* My name is Andrei Mordovski. I am a senior product designer with
              over 10 years of experience in digital product development. I went
              from a freelancer to the lead of the design team. I have
              collaborated with companies such as Leroy Merlin, Sberbank,
              Yakitoria and others */}
            </p>
          </div>
        </div>

        <div className="container">
          <p className="first">Experience</p>
          <div className="second">
            <p className="content">
              I have extensive experience in creating design systems, fintech,
              e-commerce products, BI, b2b, Saas and others
            </p>
          </div>
        </div>

        <div className="container">
          <p className="first">In numbers</p>
          <div className="second">
            <div className="content">
              <div>
                <p className="number">15+</p>
                <p className="text">implemented projects</p>
              </div>
              <div>
                <p className="number">12+</p>
                <p className="text">work experience</p>
              </div>
              <div>
                <p className="number">7</p>
                <p className="text">leading designers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="black-section">
        <div className="container">
          <p className="first">Focal point</p>
          <div className="second">
            <p className="content">
              In my work, I focus on the goals and objectives of the business,
              the target audience, research and custdev, resource and technical
              constraints
            </p>
          </div>
        </div>

        <div className="container">
          <div className="first">
            <Link to="/" className="link">
              <span>Go to projects</span>
            </Link>
            <img src={goToProjectIcon} alt="Go to projects" className="icon" />
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
