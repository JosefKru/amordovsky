import React from "react";
import "./Hero.scss";
import { useTranslation } from "react-i18next";

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="container">
        <h1>{t("welcome")}</h1>
      </div>

      <div className="container-mobile">
        <h1>{t("welcomeMobile")}</h1>
      </div>
    </section>
  );
};

export default Hero;
