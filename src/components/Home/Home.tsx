import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects";
import "./Home.scss";

function Home() {
  return (
    <div className="main">
      <Hero />
      <Projects />
    </div>
  );
}

export default Home;
