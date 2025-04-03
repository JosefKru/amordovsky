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
            project.meta?.title.map((meta, index) => (
              <div key={index} className="head-section">
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
                feature[1].map((item, index) => (
                  <Feature feature={item} key={index} />
                ))}
            </>
          ))}

          {/* remove later */}
          {Array.isArray(project.meta?.score[1]) && (
            <div className="sections">
              <div className="head">
                <p>{project.meta?.score[0]}</p>
              </div>
              <div className="body">
                <div className="numbers">
                  {project.meta?.score[1].map((item, index) => (
                    <div className="number" key={index}>
                      <span>{item[0]}</span>
                      <p>{item[1]}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </>
    </div>
  );
};

function Feature({ feature }: { feature: string | string[] | string[][] }) {
  const includes = feature[1].includes("</br>");
  const copy = (feature[1] as string).split("</br>");

  const scores = feature?.[2];

  // const scoreHead = feature[2][0];
  // const storeNums = feature[2][1] as string;

  console.log(scores);

  return (
    <div className="feature">
      <div className="head">
        <p>{feature[0]}</p>
      </div>
      <div className="body">
        {includes ? (
          copy.map((br: string, index: number) =>
            copy.length - 1 > index ? (
              <div key={index}>
                <p> {br} </p>
                <br />
              </div>
            ) : (
              <div key={index}> {br} </div>
            )
          )
        ) : (
          <p> {feature[1]} </p>
        )}
      </div>
    </div>
  );
}
