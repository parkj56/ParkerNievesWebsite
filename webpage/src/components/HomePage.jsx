// import app from '../App'
import './NavBar.css'
import NavBar from "./NavBar";
import { NavLink } from "react-router-dom";


function HomePage(){
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
                        <ion-icon name="chatbox-ellipses"></ion-icon>
                      </NavLink>
                  </span>
                  <span class= 'text'> Contact </span>
              </li>
          </ul>    
      </div>
      
    )
}
 
export default HomePage;
