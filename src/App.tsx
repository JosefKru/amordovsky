import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutPage from "./components/AboutPage/AboutPage";
import Home from "./components/Home/Home";
import "./styles/main.scss";
import MainLayout from "./components/MainLayout/MainLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
