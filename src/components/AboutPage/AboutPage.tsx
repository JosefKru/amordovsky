import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import goToProjectIcon from "../../assets/icons/goToProjectIcon.svg";
import "./AboutPage.scss";

function AboutPage() {
  const { t } = useTranslation();

  return (
    <>
      <div className="photo">Photo</div>

      <section className="white-section">
        <div className="container">
          <p className="first">Hello!</p>
          <div className="second">
            <p className="content desctop">
              {t("bioName")}
              <br />
              {t("bioIntro")}
              <br />
              {t("bioCompanies")}
            </p>
            <p className="content tablet">
              {t("bioName")}
              <br />
              <Trans i18nKey="bioIntroShort" />
              <br />
              <Trans i18nKey="bioExperienceSummary" />
            </p>

            <p className="content mobile">
              {t("bioName")}
              <br />
              {t("bioIntro")}
              <br />
              {t("bioCompanies")}
            </p>
          </div>
        </div>

        <div className="container">
          <p className="first">{t("experience.title")}</p>
          <div className="second">
            <p className="content desctop">{t("experience.description")}</p>
            <p className="content tablet">
              {t("tablet.experience.description")}
            </p>
            <p className="content mobile">{t("experience.description")}</p>
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
