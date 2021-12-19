// import app from '../App'
import ProjectsPage from './ProjectsPage'; 
import HirePage from './HirePage'; 
import ContactPage from './ContactPage'; 
import AboutPage from './AboutPage';
import MediaPage from './MediaPage';
import EducationPage from './EducationPage';
import {Routes,Route,} from "react-router-dom";
import NavImages from './NavImages';
import React, { Component } from 'react';

function renderHomePage(){
  <HomePage></HomePage>

}

export default class HomePage extends Component{
  render(){
    return (
      <NavImages>
        <Routes>
        <Route path="/" exact component={renderHomePage} />
        <Route path="/Projects" component={ProjectsPage} />
        <Route path="/HireMe" component={HirePage} />
        <Route path="/Contact" component={ContactPage} />
        <Route path="/About" component={AboutPage} />
        <Route path="/Media" component={MediaPage} />
        <Route path="/Education" component={EducationPage} />
        </Routes>
      </NavImages>
    );
  }
}
 

