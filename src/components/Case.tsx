import { useParams } from "react-router-dom";
import { projects } from "../assets/projects";
import "./Case.scss";

export const Case: React.FC = () => {
  const { id } = useParams();
  const project = projects.find((project) => project.id.toString() === id);

  if (!project) {
    return <div style={{ fontSize: "256px" }}>Project not found!</div>;
  }

  return (
    <div className="container">
      <>
        <h1 className="title">{project.name}</h1>

        <img
          src={project.meta?.src}
          alt="project.meta?.src"
          className="main-pic"
        />

        <div className="case-description">
          {project.meta?.title &&
            project.meta?.title.map((meta) => (
              <div className="head-section">
                <div className="head">
                  <p>{meta[0]}</p>
                </div>

                <div className="body">
                  <p>{meta[1]}</p>
                  <span>{project.category}</span>
                </div>
                <div />
              </div>
            ))}

          {project.meta &&
            project.meta.meta.map((meta) => (
              <div className="sections">
                <div className="head">
                  <p>{meta[0]}</p>
                </div>
                <div className="body">
                  <p>{meta[1]}</p>
                </div>
              </div>
            ))}

          {project.meta?.features.map((feature) => (
            <>
              <img
                src={feature[0] as string}
                alt="project.meta?.src"
                className="main-pic"
              />

              {Array.isArray(feature[1]) &&
                feature[1].map((item) => <Feature feature={item} />)}
            </>
          ))}
        </div>
      </>
    </div>
  );
};

function Feature({ feature }: { feature: string[] }) {
  const includes = feature[1].includes("</br>");
  const copy = feature[1].split("</br>");

  return (
    <div className="feature">
      <div className="head">
        <p>{feature[0]}</p>
      </div>
      <div className="body">
        {includes ? (
          copy.map((br: string, index: number) =>
            copy.length - 1 > index ? (
              <>
                <p> {br} </p>
                <br />
              </>
            ) : (
              <>
                <p> {br} </p>
              </>
            )
          )
        ) : (
          <p> {feature[1]} </p>
        )}
      </div>
    </div>
  );
}
