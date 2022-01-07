// import app from '../App'
import HirePage from './HirePage'; 
import AboutPage from './AboutPage';
import MediaPage from './MediaPage';
import {Routes,Route,} from "react-router-dom";
import NavImages from './NavBar';
import React, { Component } from 'react';

function renderHomePage(){
  <HomePage></HomePage>
}

export default class HomePage extends Component{
  render(){
    return (
      
      <NavImages>
        <Routes>
        <Route exact path="/" exact component={renderHomePage} />
        <Route exact path="/HireMe" component={HirePage} />
        <Route exact path="/About" component={AboutPage} />
        <Route exact path="/Media" component={MediaPage} />
        </Routes>
      </NavImages>
        
    );
  }
}
 

