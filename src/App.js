import logo from './logo.svg';
import './App.css';

import Header_Section from './components/Header/Header_Section'
import ProjectList from './Sections/Projects/ProjectsList';
import AboutMe from './Sections/AboutMe/AboutMe';

function App() {
  return (
  <div>
    <Header_Section/>
    <AboutMe/>
    <ProjectList/>
  </div>

)
    
}

export default App;
