import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from "./components/Header/Header";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
import './styles/main.scss'
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <Router>
      <Header />
      <Hero />
      <Projects />
      <Routes>
        <Route path='/' />
      </Routes>
      {/* <Footer /> */}
    </Router>
  )
}

export default App
