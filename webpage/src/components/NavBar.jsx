import {NavLink} from 'react-router-dom';
import React, { Component } from 'react';
import './NavBar.css'
// import aboutImg from './Images/pinkhat.jpg';
// import AboutPage from "./AboutPage";
// import renderPages from '../App';





class NavBar extends Component {
    render(){
        return(

            <div class='navigation'>
               <ul>
                <li>
                    <NavLink to="/"  >
                        <ion-icon name="home"></ion-icon> Home
                    </NavLink>
                </li>
                <div>
                    <NavLink to="/About" classname= 'aboutLink'>
                        <ion-icon name="accessibility"></ion-icon> About Me
                    </NavLink>
                    
                    <div>
                        <NavLink to="/Projects">
                            <ion-icon name="document-text"></ion-icon> Projects
                        </NavLink>
                        
                        <div>
                            <NavLink to="/Education">
                                <ion-icon name="school"></ion-icon> Education
                            </NavLink>

                            <div>
                                <NavLink to="/Media">
                                    <ion-icon name="camera-reverse"></ion-icon> Media
                                </NavLink>

                                <div>
                                    <NavLink to="/HireMe">
                                        <ion-icon name="briefcase"></ion-icon> Hire Me!
                                    </NavLink>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar;