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
                    <li class='list'>
                        <span class= 'icon'>
                            <NavLink to="/"  >
                                <ion-icon name="home"></ion-icon>
                            </NavLink>
                        </span>
                        <span class= 'text'> Home </span>
                    </li>
                
                     <li class='list'>
                        <span class= 'icon'>
                            <NavLink to="/AboutPage"  >
                                <ion-icon name="accessibility"></ion-icon>
                            </NavLink>
                        </span>
                        <span class= 'text'> About</span>
                    </li>

                    <li class='list'>
                        <span class= 'icon'>
                            <NavLink to="/Media"  >
                                <ion-icon name="camera-reverse"></ion-icon>
                            </NavLink>
                        </span>
                        <span class= 'text'> Media </span>
                    </li>

                    <li class='list'>
                        <span class= 'icon'>
                            <NavLink to="/HirePage"  >
                                <ion-icon name="briefcase"></ion-icon>
                            </NavLink>
                        </span>
                        <span class= 'text'> Hire Me! </span>
                    </li>
                </ul>    
            </div>
        )
    }
}

export default NavBar;