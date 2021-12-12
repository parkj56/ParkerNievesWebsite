import {Link} from 'react-router-dom';

function NavImages(){
    return(
        <div>
            <h1>Home</h1>
            <Link to="/">
                <Image src="" className="" />
            </Link>
    
            <div>
                <h1>About Me</h1>
                <Link to="/About">
                    <Image src="" className="" />
                </Link>
                    
                <div>
                    <h1>Projects</h1>
                    <Link to="/Projects">
                        <Image src="" className="" />
                    </Link>
                        
                    <div>
                        <h1>Education</h1>
                        <Link to="/Education">
                            <Image src="" className="" />
                        </Link>
                        
                        <div>
                            <h1>Contact</h1>
                            <Link to="/ContcatMe">
                                <Image src="" className="" />
                            </Link>
                            
                            <div>
                                <h1>Media</h1>
                                <Link to="/Media">
                                    <Image src="" className="" />
                                </Link>
                                
                                <div>
                                    <h1>HireMe</h1>
                                    <Link to="/HireMe">
                                        <Image src="" className="" />
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavImages;