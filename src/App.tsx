import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import "./styles/main.scss";

function App() {
  return (
    <Router>
      <Header />
      <Hero />
      <Projects />
      <Routes>
        <Route path="/" />
      </Routes>
    </Router>
  );
}

export default App;
