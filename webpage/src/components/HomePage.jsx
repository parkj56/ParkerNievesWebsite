// import app from '../App'
import './NavBar.css';
import './Home.css';
import image from './Images/download.png'




function HomePage(){
    return(
      <div className='welcome'>
          <h1 className='h1'>Parker Nieves</h1>
            <div className='title'>
                <h2>Full-Stack Software Developer</h2>
                    <div className='pixel'>
                        <img src={image} alt="pixelMe" />
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
                                    
                                    <li className='list'>
                                        <i class="devicon-csharp-plain"></i>
                                    </li>
                            
                                </ul>
                            </div>    
                </div>
            </div>
      </div>
      
    )
}
 
export default HomePage;
