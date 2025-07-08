import './App.css';

import HeaderSection from './Sections/Header/HeaderSection'
import ProjectList from './Sections/Projects/ProjectsList';
import AboutMe from './Sections/AboutMe/AboutMe';
import Home from './Sections/Home/Home';
import ArrowDownIcon from './components/ArrowDown';

function App() {
  return (
  <div>
    <ArrowDownIcon/>
    <HeaderSection/>
    <Home/>
    <AboutMe/>
    <ProjectList/>
  </div>

)
    
}

export default App;
