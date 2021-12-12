import React from 'react';
import {Routes, Route } from 'react-router-dom'; 
import ProjectsPage from './components/ProjectsPage'; 
import HirePage from './components/HirePage'; 
import ContactPage from './components/ContactPage'; 
import AboutPage from './components/AboutPage';
import MediaPage from './components/MediaPage';
import EducationPage from './components/EducationPage';
import './App.css';
 
function App() {   
  return (
      <div className="App">
        <Routes>
          <Route path="/Projects" component={ProjectsPage} />
          <Route path="/HireMe" component={HirePage} />
          <Route path="/Contact" component={ContactPage} />
          <Route path="/About" component={AboutPage} />
          <Route path="/Media" component={MediaPage} />
          <Route path="/Education" component={EducationPage} />
        </Routes>
      </div>
  );
}
 
export default App;