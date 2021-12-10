import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import ProjectsPage from './components/ProjectsPage'; 
import HirePage from './components/HirePage'; 
import ContactPage from './components/ContactPage'; 
import AboutPage from './components/AboutPage';
import './App.css';
 
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/Projects" component={ProjectsPage} />
        <Route path="/HireMe" component={HirePage} />
        <Route path="/Contact" component={ContactPage} />
        <Route path="/About" component={AboutPage} />
  
        <div className="navBar">
          <Link to="/AboutMe" className="item">About</Link>                              
          <Link to="/Projects" className="item">Projects</Link>
          <Link to="/HirePage" className="item">Hire Me!</Link>
          <Link to="/ContactPage" className="item">Contact</Link>
        </div>
      </div> 
    </BrowserRouter>
  );
}
 
export default App;