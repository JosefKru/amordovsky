import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutPage from "./components/AboutPage/AboutPage";
import Home from "./components/Home/Home";
import "./styles/main.scss";
import MainLayout from "./components/MainLayout/MainLayout";
import ContractPage from "./components/ContactPage/ContractPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContractPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
