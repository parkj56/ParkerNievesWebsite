import {NavLink} from 'react-router-dom';
import React, { Component } from 'react';
import './NavImages.css'
import aboutImg from './Images/pinkhat.jpg';
// import AboutPage from "./AboutPage";
// import renderPages from '../App';





class NavImages extends Component {
    render(){
        return(

            <div>
                <NavLink to="/"  >
                <img classname= 'aboutImg' src = {aboutImg} alt="About Me"/>
                </NavLink>
                
                <div>
                    <NavLink to="/About" classname= 'aboutLink'>
                        <img classname= 'aboutImg' src = {aboutImg} alt="About Me"/>
                    </NavLink>
                    
                    <div>
                        <NavLink to="/Projects">
                        <img classname= 'aboutImg' src = {aboutImg} alt="About Me"/>
                        </NavLink>
                        
                        <div>
                            <NavLink to="/Education">
                            <img classname= 'aboutImg' src = {aboutImg} alt="About Me"/>
                            </NavLink>

                            <div>
                                <NavLink to="/ContcatMe">
                                <img classname= 'aboutImg' src = {aboutImg} alt="About Me"/>
                                </NavLink>

                                <div>
                                    <NavLink to="/Media">
                                    <img classname= 'aboutImg' src = {aboutImg} alt="About Me"/>
                                    </NavLink>

                                    <div>
                                        <NavLink to="/HireMe">
                                        <img classname= 'aboutImg' src = {aboutImg} alt="About Me"/>
                                        </NavLink>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavImages;