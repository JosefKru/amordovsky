import { Trans, useTranslation } from "react-i18next";
// import { Link } from "react-router-dom";
// import goToProjectIcon from "../../assets/icons/goToProjectIcon.svg";
import { Link } from "react-router-dom";
import "./AboutPage.scss";

function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="main-container">
      <div className="photo">Photo</div>
      <div className="container">
        <section className="about-section">about-section</section>

        <section className="info-section">
          <div className="info-conteiner">
            <div className="section-title">{t("infoSectionTitle")}</div>
            <div className="section-content">
              <Trans i18nKey="infoSectionContent" />
            </div>
          </div>

          <div className="info-conteiner">
            <div className="section-title">
              <Link to="/">Go to projects</Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;
