import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { projects } from "../../assets/projects";
import "./Case.scss";

export const Case: React.FC = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const project = projects.find((project) => project.id.toString() === id);

  if (!project) {
    return <div style={{ fontSize: "256px" }}>Project not found!</div>;
  }

  return (
    <div className="container">
      <h1 className="title">{t(project.name)}</h1>

      <img src={project.meta?.src} className="main-pic" />

      {project.meta?.title &&
        project.meta?.title.map((meta, index) => (
          <div key={index} className="head-section">
            <div className="head">
              <p>{t(meta[0])}</p>
            </div>

            <div className="body">
              <Row row={t(meta[1] as string)} />
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
            <img
              src={feature[0] as string}
              alt="project.meta?.src"
              className="feature-pic"
            />
            {Array.isArray(feature) &&
              feature.map((item, index) => (
                <Feature feature={item} key={index} />
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

function Feature({ feature }: { feature: string | (string | string[][])[][] }) {
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
  const { t } = useTranslation();
  return (
    <>
      {score.map((item, index) => (
        <div className="number" key={index}>
          <span>{item[0]}</span>

          <p>{t(item[1] as string)}</p>
          {item[2] && <p>{t(item[2] as string)}</p>}
        </div>
      ))}
    </>
  );
}

function Row({ row }: { row: string }) {
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth === 1440);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [isLargeScreen]);

  const processedRow = isLargeScreen
    ? row.split("<br/>")
    : [row.replace(/<br\/>/g, " ")];

  return (
    <>
      {processedRow.map((text, index) => (
        <div key={index}>
          <p>
            {text}
            {isLargeScreen && index < processedRow.length - 1 && <br />}
          </p>
        </div>
      ))}
    </>
  );
}

function Paragraph({ feature }: { feature: (string | string[][])[][] }) {
  const { t } = useTranslation();

  const includes = t(feature[0][1] as string).includes("<br/br/>");
  const copy = t(feature[0][1] as string).split("<br/br/>");

  return (
    <>
      {copy.map((row: string, index: number) =>
        includes && copy.length - 1 > index ? (
          <div key={index}>
            <Row row={t(row)} />
            <br />
          </div>
        ) : (
          <Row row={t(row)} key={index} />
        )
      )}
    </>
  );
}
