import { useParams } from "react-router-dom";
import { projects } from "../assets/projects";

export const ProjectDetail: React.FC = () => {
  const { id } = useParams();
  const project = projects.find((project) => project.id.toString() === id);

  if (!project) {
    return <div style={{ fontSize: "256px" }}>Project not found!</div>;
  }

  return (
    <div className="project-detail">
      <h1>{project.name}</h1>
      <p>Category: {project.category}</p>
      <img src={project.image} alt={project.name} />
      <div className="meta">
        {project.meta && (
          <>
            <h2>{project.meta.title[0]}</h2>
            <p>{project.meta.meta[0][0]}</p>
            <p>{project.meta.meta[0][1]}</p>
          </>
        )}
      </div>
    </div>
  );
};
