import {NavLink} from 'react-router-dom';
import React, { Component } from 'react';
import './NavBar.css'


class NavBar extends Component {
    render(){
        return(
            <div className='navigation'>
               <ul>
                    <li className='list'>
                        <span className= 'icon'>
                            <NavLink to="/"  >
                                <ion-icon name="home"></ion-icon>
                            </NavLink>
                        </span>
                        <span className= 'text'> Home </span>
                    </li>
                
                     <li className='list'>
                        <span className= 'icon'>
                            <NavLink to="/About"  >
                                <ion-icon name="accessibility"></ion-icon>
                            </NavLink>
                        </span>
                        <span className= 'text'> About</span>
                    </li>

                    <li className='list'>
                        <span className= 'icon'>
                            <NavLink to="/Media"  >
                                <ion-icon name="camera-reverse"></ion-icon>
                            </NavLink>
                        </span>
                        <span className= 'text'> Media </span>
                    </li>

                    <li className='list'>
                        <span className= 'icon'>
                            <NavLink to="/HireMe"  >
                                <ion-icon name="briefcase"></ion-icon>
                            </NavLink>
                        </span>
                        <span className= 'text'> Hire Me! </span>
                    </li>
                </ul>    
            </div>
        )
    }
}

export default NavBar;