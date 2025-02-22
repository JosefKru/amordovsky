import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects";
import "./Home.scss";

function Home() {
  return (
    <div className="main">
      <Header />
      <Hero />
      <Projects />
    </div>
  );
}

export default Home;
