import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import goToProjectIcon from "../../assets/icons/goToProjectIcon.svg";
import "./AboutPage.scss";

function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="main-container">
      <div className="photo">Photo</div>
      <div className="container">
        <section className="about-section">
          <div className="info-conteiner">
            <div className="section-title">{t("aboutSectionHello")}</div>
            <div className="section-content">
              <Trans i18nKey="aboutSectionHelloContent" />
            </div>
          </div>

          <div className="info-conteiner">
            <div className="section-title">{t("aboutSectionExperience")}</div>
            <div className="section-content">
              <Trans i18nKey="aboutSectionExperienceContent" />
            </div>
          </div>

          <div className="info-conteiner">
            <div className="section-title">{t("aboutSectionNumbers")}</div>
            <div className="section-content numbers">
              <div className="number">
                <span>15+</span>
                <p>{t("aboutSectionNumbersImplemented")}</p>
              </div>
              <div className="number">
                <span>12+</span>
                <p>{t("aboutSectionNumbersCommercial")}</p>
              </div>
              <div className="number">
                <span>7</span>
                <p>{t("aboutSectionNumbersLeading")}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="info-section">
          <div className="info-conteiner">
            <div className="section-title">{t("infoSectionTitle")}</div>
            <div className="section-content">
              <Trans i18nKey="infoSectionContent" />
            </div>
          </div>

          <div className="info-conteiner">
            <div className="section-title">
              <Link to="/">
                <span>{t("goToProjects")}</span>
                <img src={goToProjectIcon} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;
