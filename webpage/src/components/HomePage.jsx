// import app from '../App'
import './NavBar.css';
import './Home.css';
import image from './Images/download.png'
import C from './Images/csharp2.png'



function HomePage(){
    return(
      <div className='welcome'>
          <h1 className='h1'>Parker Nieves</h1>
            <div className='title'>
                <h2>Full-Stack Software Developer</h2>
                    <div className='pixel'>
                        <img src={image} alt="pixelMe" />
                            <div className='c'>
                                <img src={C} alt="C#" />
                                    <div className='icons'>
                                        <ul>
                                            <li className='list'>
                                                <ion-icon name="logo-javascript"></ion-icon>
                                            </li>
                                            
                                            <li className='list'>
                                                <ion-icon name="logo-html5"></ion-icon>
                                            </li>
                                            
                                            <li className='list'>
                                                <ion-icon name="logo-python"></ion-icon>
                                            </li>
                                        </ul>
                                    </div>    
                            </div>
                    </div>
            </div>
      </div>
      
    )
}
 
export default HomePage;
