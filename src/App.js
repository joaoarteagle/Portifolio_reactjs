import "./App.css";

import HeaderSection from "./Sections/Header/HeaderSection";
import ProjectList from "./Sections/Projects/Projects.section";
import AboutMe from "./Sections/AboutMe/AboutMe.section";
import Home from "./Sections/Home/Home.section";
import ArrowDownIcon from "./components/ArrowDown";
import SkillsSection from "./Sections/Skills/Skills.section";

function App() {
  return (
    <>
      <ArrowDownIcon />
      <div className="containerSections">
        <HeaderSection />
        <Home id="homeSection" />
        <AboutMe id="aboutMeSection" />
        <SkillsSection id="skillsSection" />
        <ProjectList />
      </div>
    </>
  );
}

export default App;
