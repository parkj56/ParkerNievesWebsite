import './App.css';
// import ProjectsPage from './components/ProjectsPage'; 
// import HirePage from './components/HirePage'; 
// import ContactPage from './components/ContactPage'; 
// import AboutPage from './components/AboutPage';
// import MediaPage from './components/MediaPage';
// import EducationPage from './components/EducationPage';
// import React from "react";
// import {Routes,Route,} from "react-router-dom";
// import NavImages from './components/NavImages';
import HirePage from './components/HirePage';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import MediaPage from './components/MediaPage';
import {Switch, Route} from 'react-router-dom'
import React, { Component } from 'react';
import NavBar from './components/NavBar';


function App() {   
    return (
        <><NavBar />
        <Switch>
            <Route exact path="/" exact component={HomePage} />
            <Route exact path="/HireMe" component={HirePage} />
            <Route exact path="/About" component={AboutPage} />
            <Route exact path="/Media" component={MediaPage} />
        </Switch></>  
    );
}


export default App; 
