import { BrowserRouter, Route, Routes } from "react-router-dom";

//Components
import NavBar from "./components/navbar/navbar";
import Home from "./components/home/home";
import About from "./components/about/about";
import Projects from "./components/projects/projects";
import Resume from "./components/resume/resume";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App