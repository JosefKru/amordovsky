import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import goToProjectIcon from "../../assets/icons/goToProjectBlackIcon.svg";
import { projects } from "../../assets/projects";
import { useMinViewportWidth } from "../../hooks/useMinViewportWidth";
import { isValidFeatureContent, renderMedia } from "../../utils/utils";
import "./Case.scss";

const MOBILE_BREAKPOINT = 480;

export const Case: React.FC = () => {
  const { t } = useTranslation();
  const { slug } = useParams();
  const project = projects.find((project) => project.slug === slug);
  const isDesktop = useMinViewportWidth(MOBILE_BREAKPOINT);

  if (!project) {
    return <div>Project not found!</div>;
  }
  const nextProject = projects.find((p) => p.id === project?.id + 1);

  return (
    <div className="container">
      <h1 className="title">
        {isDesktop ? (
          <Trans i18nKey={project.name} />
        ) : (
          <Trans i18nKey={project?.meta?.titleMobile} />
        )}
      </h1>

      {project.meta?.src && renderMedia(project.meta.src)}

      {project.meta?.title &&
        project.meta?.title.map((meta, index) => (
          <div key={index} className="head-section">
            <div className="head">
              <p>{t(meta[0])}</p>
            </div>

            <div className="body">
              {t(meta[1])}
              <span>{project.category}</span>
            </div>
            <div />
          </div>
        ))}

      <div className="case-description">
        {project.meta &&
          project.meta.meta.map(
            (meta, index) =>
              Array.isArray(meta) && <Feature feature={[meta]} key={index} />
          )}

        {project.meta?.features.map((feature, index) => (
          <div key={index}>
            {renderMedia(
              feature[0] as string,
              "feature-pic",
              `${feature[1][0][2] ? feature[1][0][2] : ""}`
            )}
            {Array.isArray(feature) &&
              feature.map((item, index) => (
                <Feature feature={item} key={index} />
              ))}
          </div>
        ))}
      </div>

      <footer className="footer">
        <Link
          to={`/project/${
            nextProject?.isStub ? projects[0].slug : nextProject?.slug
          }`}
        >
          <div className="link-container">
            <span>
              {t(
                nextProject?.isStub ? projects[0].name : nextProject?.name || ""
              )}
            </span>
            <img src={goToProjectIcon} className="icon" />
          </div>
          <img
          className="next-project-image"
            src={nextProject?.isStub ? projects[0].image : nextProject?.image}
          />
        </Link>
      </footer>
    </div>
  );
};

function Feature({
  feature,
}: {
  feature: string | string[] | (string | string[][])[][];
}) {
  const { t } = useTranslation();

  if (typeof feature === "string") {
    return null;
  }

  const hasNestedStringArray = feature.some(
    (item) =>
      Array.isArray(item) &&
      item.every((subItem) => typeof subItem === "string")
  );

  if (hasNestedStringArray && feature[1]) {
    return (
      <div className="features">
        <div className="feature">
          <div className="head">
            <p>{t(feature[0][0] as string)}</p>
          </div>
          <div className="body">
            <Paragraph feature={feature} />
          </div>
        </div>
        {Array.isArray(feature[1][1]) && (
          <div className="feature">
            <div className="head">
              {feature[1][0] == "" ? null : <p>{t(feature[1][0] as string)}</p>}
            </div>
            <div className="body">
              <div className="numbers">
                <Score score={feature[1][1]} />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  if (!isValidFeatureContent(feature)) return null;

  return (
    <div className="feature">
      <div className="head">
        {feature[0][0] == "" ? null : <p>{t(feature[0][0] as string)}</p>}
      </div>
      <div className="body">
        <Paragraph feature={feature} />
      </div>
    </div>
  );
}

function Score({ score }: { score: (string | string[][])[][] }) {
  const { i18n } = useTranslation();
  return (
    <>
      {score.map((item, index) => (
        <div className="number" key={index}>
          <span>{item[0]}</span>

          <p>
            <Trans i18nKey={item[1] as string} />
          </p>
          {i18n.exists(item[2] as string) && (
            <p>
              <Trans i18nKey={item[2] as string} />
            </p>
          )}
        </div>
      ))}
    </>
  );
}

function Paragraph({
  feature,
}: {
  feature: string | string[] | (string | string[][])[][];
}) {
  const { t } = useTranslation();

  const includes = t(feature[0][1] as string).includes("<br/br/>");
  const copy = t(feature[0][1] as string).split("<br/br/>");

  return (
    <>
      {copy.map((row, index) =>
        includes && copy.length - 1 > index ? (
          <React.Fragment key={index}>
            {t(row)}
            <br />
            <br />
          </React.Fragment>
        ) : (
          t(row)
        )
      )}
    </>
  );
}
